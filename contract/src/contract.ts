import { NearBindgen, near, call, view, initialize } from "near-sdk-js";

@NearBindgen({})
class Tip {
  tipReceiver: string = "n8thegr8.near";
  tippers: string[] = [];
  totalTips: bigint = BigInt(0);

  @initialize({})
  init({ receiver }: { receiver: string }): void {
    this.tipReceiver = receiver;
  }

  @view({})
  get_tipper(): string[] {
    return this.tippers;
  }

  @view({})
  get_total_tips(): bigint {
    return this.totalTips;
  }

  @call({})
  send_tip(): void {
    const sender = near.predecessorAccountId();
    const amount = near.attachedDeposit();

    near.log(`Thank you for tipping ${amount} Near ${sender}!`);

    const promise = near.promiseBatchCreate(this.tipReceiver);
    near.promiseBatchActionTransfer(promise, amount);

    if (!this.tippers.includes(near.predecessorAccountId())) {
      this.tippers.push(near.predecessorAccountId());
    };
    this.totalTips += near.attachedDeposit();
  }
}
