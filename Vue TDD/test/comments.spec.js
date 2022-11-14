import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Comments from "@/components/Comments";
import { getArticle } from "@/services/articlesRepository";
import { generateArticle } from "./factories/article";

jest.mock("../src/services/articlesRepository");



describe("Article component", () => {
  describe("when there are not comentaries",()=>{
    it("shuold display an error message", async()=>{
      // const article = generateArticle()
      // getArticle.mockResolvedValueOnce(article)
      
      render(Comments, {
        // props: {
        //   postId: "1"
        // }
      })
      // const message = screen.getByText("there are no")
      // const message = screen.getByText(/There are not /i)
      expect(message).toBeInTheDocument()
    })
  })
})
