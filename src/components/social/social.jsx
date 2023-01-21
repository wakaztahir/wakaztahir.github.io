"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var material_1 = require("@mui/material");
var FacebookIcon_1 = require("../icons/FacebookIcon");
var TwitterIcon_1 = require("../icons/TwitterIcon");
var StackoverflowIcon_1 = require("../icons/StackoverflowIcon");
var GithubIcon_1 = require("../icons/GithubIcon");
var styled_components_1 = require("styled-components");
var Section = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin-top: 6rem;\n  @media screen and (min-width: 720px) {\n    display: none;\n  }\n"], ["\n  display: block;\n  margin-top: 6rem;\n  @media screen and (min-width: 720px) {\n    display: none;\n  }\n"])));
var SocialLink = styled_components_1.default.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 0 1em;\n"], ["\n  margin: 0 1em;\n"])));
function Social() {
    return (<Section>
      <SocialLink href="https://facebook.com/wakaztahir" target="_blank" rel="noreferrer">
        <material_1.IconButton size="large">
          <FacebookIcon_1.default />
        </material_1.IconButton>
      </SocialLink>
      <SocialLink href="https://twitter.com/wakaztahir" target="_blank" rel="noreferrer">
        <TwitterIcon_1.default />
      </SocialLink>
      <a href="https://stackoverflow.com/users/3343503/waqas" target="_blank" rel="noreferrer">
        <StackoverflowIcon_1.default />
      </a>
      <SocialLink href="https://github.com/wakaztahir" target="_blank" rel="noreferrer">
        <GithubIcon_1.default />
      </SocialLink>
    </Section>);
}
exports.default = Social;
var templateObject_1, templateObject_2;
