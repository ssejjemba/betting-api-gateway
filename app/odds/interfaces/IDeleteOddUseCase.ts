export interface IDeleteOddUseCase {
  execute(id: number): Promise<void>;
}
