"use client";

import * as React from "react";
import { Check, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export function SearchEvent() {
    const [open, setOpen] = React.useState(false);
    const [events, setEvents] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await fetch("/api/events/gets");
                if (!response.ok)
                    throw new Error("Erreur lors du chargement des événements");

                const data = await response.json();
                setEvents(
                    data.map((event) => ({
                        event_id: event.event_id,
                        title: event.title,
                        slug: event.title.toLowerCase().replace(/\s+/g, "-"),
                    }))
                );
            } catch (error) {
                console.error("Erreur :", error);
            }
        }
        fetchEvents();
    }, []);

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    className="w-fit justify-between cursor-pointer"
                >
                    Rechercher un évènement...
                    <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>
                            Rechercher un évènement
                        </AlertDialogTitle>
                        <AlertDialogFooter>
                            <AlertDialogCancel className="cursor-pointer">
                                <X />
                            </AlertDialogCancel>
                        </AlertDialogFooter>
                    </div>
                    <AlertDialogDescription>
                        <Command>
                            <CommandInput placeholder="Rechercher un évènement..." />
                            <CommandList>
                                <CommandEmpty>
                                    Aucun évènement ne correspond.
                                </CommandEmpty>
                                <CommandGroup>
                                    {events.map((event) => (
                                        <CommandItem
                                            key={event.event_id}
                                            value={event.title}
                                            className="cursor-pointer"
                                            onSelect={() => {
                                                router.push(
                                                    `/events/${event.slug}`
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            <Check className="mr-2 h-4 w-4 opacity-100" />
                                            {event.title}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
