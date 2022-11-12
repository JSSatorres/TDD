import { mount } from '@vue/test-utils'
import App from "@/App.vue"

describe("mounted component h1", () => {
  it("should be a wrapper with a h1", () => {
    const wrapper = mount(<App/>) 
    //console.log(wrapper.html());
    expect(wrapper.html()).toBe("<h1>Contador: 0 </h1>")
  })

  it("It should send a counter with number 1", () => {
    const wrapper = mount(<App/>, 
      {props: {
        count:1
      }
    })
    expect(wrapper.html()).toBe("Contador: 1")
  })
})