import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button as BB } from "./Button";
import { Button } from "stlato-ui";
import { Plus, Triangle } from "react-feather";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Color = () => (
  <div className="space-y-2">
    <div>
      <Button color="primary">Primary</Button>
    </div>
    <div>
      <Button color="secondary">Secondary</Button>
    </div>
  </div>
);

export const Size = () => (
  <div className="space-y-2">
    <div>
      <Button size="sm">Small</Button>
    </div>
    <div>
      <Button size="md">Medium</Button>
    </div>
    <div>
      <Button size="lg">Large</Button>
    </div>
  </div>
);

export const WithIcon = () => (
  <div className="space-y-2">
    <div>
      <Button startIcon={<Plus />}>StartIcon</Button>
    </div>
    <div>
      <Button endIcon={<Plus />}>EndIcon</Button>
    </div>
  </div>
);
