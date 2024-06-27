import type { Quiz } from "./quiz"

export type Set = {
  url: string,
  title: string,
  getQuizzes: () => Promise<Array<Quiz>>,
}
