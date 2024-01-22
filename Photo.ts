export class Photo {
  url: string;
  filename: string;
  width: number;
  height: number;

  constructor(url: string, filename: string, width: number, height: number) {
    this.url = url;
    this.filename = filename;
    this.width = width;
    this.height = height;
  }

  getUrl(): string {
    return this.url;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  getFilename(): string {
    return this.filename;
  }

  setFilename(filename: string): void {
    this.filename = filename;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    this.height = height;
  }
}
