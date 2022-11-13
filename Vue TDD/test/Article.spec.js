jest.mock("../src/services/CoursesRepository");

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Article from "@/components/Article";
import { getArticle } from "@/services/CoursesRepository";



describe("Article component", () => {
  it("should list courses", async () => {
    
  });
});
