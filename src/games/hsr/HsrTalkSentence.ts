import { IEntity } from "@game/common/IEntity";

export interface HsrTalkSentence extends IEntity<number> {
  name: string;
  text: string;
  voiceId?: number;
}
