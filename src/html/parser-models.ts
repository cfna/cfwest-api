export interface PlayerProfileInformation {
  lastSeen?: Date;
  kills?: number;
  deaths?: number;
  headshots?: number;
  wins?: number;
  defeats?: number;
  exp?: number;
  gamesPlayed?: number;
  registrationDate?: Date;
}

export interface ClanProfileInformation {
  clanName?: string;
  membersCount?: number;
  creationDate?: Date;
  description?: string;
  stats?: ClanProfileInformation.Stats;
  details?: ClanProfileInformation.Details;
  websiteUrl?: string;
  twitterShareUrl?: string;
}

export namespace ClanProfileInformation {
  export interface Stats {
    winRate?: string;
    wins?: number;
    draws?: number;
    losses?: number;
  }

  export interface Details {
    map?: string;
    mode?: string;
    rivals?: string;
  }
}
