<template>
    <Transition
        appear
        appear-active-class="transition duration-1000 ease-out delay-500"
        appear-from-class="-translate-y-full"
    >
        <div
            class="fixed font-handwritten inset-x-0 flex gap-4 items-end text-white z-10 py-4 px-10"
        >
            <RouterLink
                class="text-4xl hover:text-light hover:scale-110 transition cursor-pointer"
                to="/"
            >
                Tekwoo
            </RouterLink>

            <div class="grow"></div>

            <a
                class="text-lg leading-snug hover:text-light hover:scale-110 transition cursor-pointer"
                href="mailto:martindzejky@gmail.com"
            >
                Kontakt
            </a>

            <RouterLink
                class="text-lg leading-snug hover:text-light hover:scale-110 transition cursor-pointer"
                to="/7"
            >
                Dielňa
            </RouterLink>
        </div>
    </Transition>
</template>
