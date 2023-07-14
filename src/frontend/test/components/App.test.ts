import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import router from "../../src/router/index";
import App from "../../src/App.vue";

const testRenderedElement = async (test: any) => {
  setTimeout(() => {
    test();
  }, 1000);
};

describe("App.vue", () => {
  it('sets the document title to "MTAS" initially', () => {
    mount(App, {
      global: {
        plugins: [router],
      },
    });

    expect(document.title).toEqual("MTAS");
  });

  it("updates the document title based on the route name", async () => {
    mount(App, {
      global: {
        plugins: [router],
      },
    });
    router.push({ name: "about" });

    testRenderedElement(() => {
      expect(document.title).toEqual("MTAS - About");
    });
  });

  it("renders the correct navigation links", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    testRenderedElement(() => {
      const routerLinks = wrapper.findAll("a.router-link");

      expect(routerLinks.length).toBe(4);
      expect(routerLinks[0].text()).toBe("Home");
      expect(routerLinks[1].text()).toBe("About");
      expect(routerLinks[2].text()).toBe("Tools");
      expect(routerLinks[3].attributes("href")).toBe(
        "https://github.com/RooTender/MTAS"
      );
    });
  });

  it("applies styles to active router link", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    testRenderedElement(() => {
      const activeLink = wrapper.find("a.router-link-exact-active");

      expect(activeLink.classes()).toContain("router-link-exact-active");
      expect(activeLink.attributes("style")).toContain("font-weight: bold;");
    });
  });

  it("applies bold font-weight to active router link", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    testRenderedElement(() => {
      const activeLink = wrapper.find("a.router-link-exact-active");

      expect(activeLink.attributes("style")).toContain("font-weight: bold;");
    });
  });

  it("underlines router link on hover", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    testRenderedElement(() => {
      const activeLink = wrapper.find("a.router-link-exact-active");

      activeLink.trigger("mouseover");
      expect(activeLink.attributes("style")).toContain(
        "text-decoration: underline;"
      );

      activeLink.trigger("mouseout");
      expect(activeLink.attributes("style")).not.toContain(
        "text-decoration: underline;"
      );
    });
  });
});
