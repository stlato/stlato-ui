import React from "react";
import type { Meta } from "@storybook/react";
import { Plus } from "react-feather";
import { Button } from "stlato-ui";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

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
