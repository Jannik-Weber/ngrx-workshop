import { LoggerConfig } from './logger.config';
export declare class LoggerService {
    private config;
    constructor(config: LoggerConfig);
    debug(message: string): void;
    log(message: string): void;
}
