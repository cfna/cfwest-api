import { ApiModule } from './base';

export class Events extends ApiModule {
  public async command<T>(cmd: Events.Command | string): Promise<T | any> {
    const response = await this.getHttpClient().get('events.json', {
      params: {
        command: cmd,
      },
    });
    return (response as unknown) as T;
  }
}

// tslint:disable-next-line:no-namespace
export namespace Events {
  export type Command = 'monthlymixupevent' | 'getServertime' | 'getZPBalane';
}
