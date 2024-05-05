// INFO: Single-Responsibility Principle
abstract class BaseSorter {
  public abstract sort(input: number[]): number[];
}

export class BubbleSort implements BaseSorter {
  public sort(input: number[]): number[] {
    //HACK: mock implementation
    this.saveToFile(input);
    return input;
  }

  public saveToFile(input: number[]): void {
    console.log("Saved input", { input });
  }
}
