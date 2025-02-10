import axios from "axios";
export async function PostMessageFetcher(message: string) {
  try {
    const result = await axios.post(
      "https://api.kynx.xyz/get/data",
      {
        message: message,
      },
      {
        headers: {
          Authorization: "Basic dXNlcjp4b3hv",
          "Content-Type": "application/json",
        },
      },
    );
    return result.data;
  } catch (error: any) {
    console.error("Error submitting the message:", error);
    throw new Error(error.message || "ERROR");
  }
}
