export default function isValidTxnId(txnId: string): boolean {
    const txnIdPattern = /^0x[a-fA-F0-9]{64}$/;
    return txnIdPattern.test(txnId);
}
  