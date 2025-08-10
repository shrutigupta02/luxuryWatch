const watches_api = process.env.REACT_APP_API_BASE_URL;


export const fetchWatches = async () => {
  try {
    const url = `${watches_api}`;
    console.log("Fetching from:", url);

    const response = await fetch(url);

    console.log("Response received:", {
      status: response.status,
      statusText: response.statusText,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch watches");
    }

    const data = await response.json();
    console.log("Fetched watches:", data);
    return data;
  } catch (error) {
    console.error("Error fetching watches:", error);
    throw error;
  }
};

export const getWatchById = async (id) => {
  try {
    const url = `${watches_api}/${id}`;
    console.log("Fetching watch:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Watch not found");
    }

    const data = await response.json();
    console.log("Fetched watch details:", data);
    return data;
  } catch (error) {
    console.error("Error fetching watch details:", error);
    throw error;
  }
};
