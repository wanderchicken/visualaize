import { fetchResultByTxnId, fetchNftByTxnId } from "@/fetcher/index";
const MAX_DURATION = 3 * 60 * 1000;
export async function pollForResultTxnId(txId: string): Promise<any> {
  const POLLING_INTERVAL = 5000; // 5 seconds
  const startTime = Date.now();

  while (true) {
    try {
      if (Date.now() - startTime >= MAX_DURATION) {
        throw new Error("Error Timeout");
      }
      const result = await fetchResultByTxnId(txId);
      if (result && typeof (result.is_unique) !== "undefined") {
        return result;
      }
    } catch (error: any) {
      console.error("Error in Poll result:", error);
      if (error.message.includes("Error Timeout")) {
        throw error;
      }
    }

    // Wait for the polling interval
    await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL));
  }
}

export async function PollForFetchNftByTxnId({ 
  txnId, 
  aiMessage
}: { 
  txnId: string; 
  aiMessage: string[] 
}): Promise<any> {
  const POLLING_INTERVAL = 5000;
  let elapsedTime = 0;
  const startTime = Date.now();

  while (elapsedTime < MAX_DURATION) {
    try {
      const result = await fetchNftByTxnId({txnId,aiMessage});
      
      if (result?.nft_url) {
        return result;
      }
      if (result?.aimessage) {
        return result;
      }
    } catch (error: any) {
      console.error("Polling error:", error.message);
    }
    
    await new Promise(resolve => setTimeout(resolve, POLLING_INTERVAL));
    elapsedTime = Date.now() - startTime;
  }
  
  throw new Error(`NFT URL not received within ${MAX_DURATION / 1000} seconds`);
}

