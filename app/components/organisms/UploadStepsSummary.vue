<template>
    <IconBubbleGroup :icons="iconsConfig" />
</template>
<script setup lang="ts">
import type { GroupIcon } from "../molecules/IconBubbleGroup.vue";

const iconColor: GroupIcon["colorClasses"]["icon"] = "text-primary";
const backgroundColor: GroupIcon["colorClasses"]["background"] = "bg-secondary";

const iconsConfig: GroupIcon[] = [
    {
        icon: ["far", "file"],
        colorClasses: {
            icon: iconColor,
            background: backgroundColor,
        },
        text: "Drop Files",
    },
    {
        icon: ["fas", "magnifying-glass"],
        colorClasses: {
            icon: iconColor,
            background: backgroundColor,
        },
        text: "Review Files",
    },
    {
        icon: ["fas", "upload"],
        colorClasses: {
            icon: iconColor,
            background: backgroundColor,
        },
        text: "Upload Files",
    },
];
</script>
