type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
}

class Logger {
  private formatTimestamp(): string {
    return new Date().toISOString();
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    const entry: LogEntry = {
      timestamp: this.formatTimestamp(),
      level,
      message,
      context,
    };

    const formattedMessage = `${entry.timestamp} [${level.toUpperCase()}] ${message}`;
    
    if (context) {
      console[level === 'error' ? 'error' : 'log'](formattedMessage, context);
    } else {
      console[level === 'error' ? 'error' : 'log'](formattedMessage);
    }
  }

  info(message: string, context?: Record<string, any>): void {
    this.log('info', message, context);
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log('warn', message, context);
  }

  error(message: string, error?: Error | Record<string, any>): void {
    const context = error instanceof Error 
      ? { error: error.message, stack: error.stack }
      : error;
    
    this.log('error', message, context);
  }

  debug(message: string, context?: Record<string, any>): void {
    if (process.env.NODE_ENV === 'development') {
      this.log('debug', message, context);
    }
  }
}

export const logger = new Logger(); 