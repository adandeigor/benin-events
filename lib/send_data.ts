import { prisma } from "@/lib/prisma-client";

interface EventData {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  start_hours: string;
  Lieu: string;
  banner_image: string;
  entrer: string;
  images: string[];
  priority: boolean;
  organizer_id: number;
  category_id: number;
  ticket_price: number;
  vedette: boolean;
}

interface CategoryData {
  category_name: string;
  category_description: string;
}

export async function createEvent(eventData: EventData) {
  try {
    // Validate eventData
    if (!eventData.title || !eventData.description || !eventData.start_date || !eventData.end_date || !eventData.start_hours || !eventData.Lieu || !eventData.banner_image || !eventData.entrer || !eventData.images || eventData.priority === undefined || !eventData.organizer_id || !eventData.category_id || eventData.ticket_price === undefined || eventData.vedette === undefined) {
      throw new Error("Missing required event data");
    }

    const newEvent = await prisma.events.create({
      data: {
        ...eventData,
        visibility: "PUBLIC",
      },
    });
    return newEvent;
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error("Error creating event");
  }
}

export async function createCategory(categoryData: CategoryData) {
  try {
    // Validate categoryData
    if (!categoryData.category_name || !categoryData.category_description) {
      throw new Error("Missing required category data");
    }

    const newCategory = await prisma.categories.create({
      data: categoryData,
    });
    return newCategory;
  } catch (error) {
    console.error("Error creating category:", error);
    throw new Error("Error creating category");
  }
}
