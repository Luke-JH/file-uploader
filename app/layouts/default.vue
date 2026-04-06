<template>
    <div
        class="flex justify-center bg-background pt-16 text-primary-text"
        style="min-height: 100vh"
    >
        <div class="w-full max-w-[2560px]">
            <div class="mb-40">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>
