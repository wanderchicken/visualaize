import axios from "axios";
export async function fetchResultByTxnId(id: string) {
  try {
    const result = await axios.get(
      `https://api.visualaize.fun/getResultByTxnId?txnId=${id}`,
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

export async function fetchNftByTxnId({
  txnId,
  aiMessage,
}: {
  txnId: string;
  aiMessage: string[];
}) {
  try {
    const result = await axios.get(
      `https://api.visualaize.fun/getNFTByTxnId?txnId=${txnId}&aiMessage=${aiMessage}`,
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
