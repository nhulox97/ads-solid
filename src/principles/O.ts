// INFO: Open-Closed Principle

type ShapeType = "circle" | "rectangle";

export class BadShape {
  readonly width?: number;
  readonly height?: number;
  readonly radius?: number;

  constructor(
    private readonly shapeType: ShapeType,
    private readonly args: Record<string, number>,
  ) {
    if (this.shapeType === "circle") {
      this.radius = this.args.radius;
    }
    if (shapeType === "rectangle") {
      this.width = this.args.width;
      this.height = this.args.height;
    }
  }

  public calculateArea(): number {
    if (this.shapeType === "circle") {
      return Math.PI * Math.pow(this.radius!, 2);
    }

    return this.height! * this.width!;
  }
}
