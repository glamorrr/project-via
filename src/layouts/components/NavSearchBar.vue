<script setup>
import axios from "@axios";
import { useThemeConfig } from "@core/composable/useThemeConfig";

const { appContentLayoutNav } = useThemeConfig();

defineOptions({ inheritAttrs: false });

// 👉 Is App Search Bar Visible
const isAppSearchBarVisible = ref(false);

// 👉 Default suggestions
const suggestionGroups = [
  {
    title: "Sistem Informasi",
    content: [
      {
        icon: "tabler-chart-donut",
        title: "Growth mindset in Digital Era",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title: "How to Make a Notion for College Students",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Design Thinking Processfor Product and Service Planning by UI/UX Designer",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title: "The key of profitable digital marketing",
        url: { name: "dashboards-analytics" },
      },
    ],
  },

  {
    title: "Teknologi Informasi",
    content: [
      {
        icon: "tabler-chart-donut",
        title:
          "Harnessing the Power of Information Technology for Business Transformation",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Blockchain Technology: Revolutionizing Data Security and Trust in the Information Technology Landscape",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Cybersecurity in the Age of Digital Transformation: Safeguarding Information Technology Infrastructure and Data",
        url: { name: "dashboards-analytics" },
      },
    ],
  },
  {
    title: "Agribisnis",
    content: [
      {
        icon: "tabler-chart-donut",
        title:
          "Agribusiness in the Digital Era: Innovations, Challenges, and Opportunities",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "The Role of Agribusiness in Food Security and Economic Development",
        url: { name: "dashboards-analytics" },
      },
    ],
  },
  {
    title: "Matematika",
    content: [
      {
        icon: "tabler-chart-donut",
        title:
          "The Beauty and Power of Mathematics: Exploring the Wonders of Numbers and Patterns",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Applications of Mathematics in Real-World Scenarios: From Engineering to Finance",
        url: { name: "dashboards-analytics" },
      },
    ],
  },
  {
    title: "Biologi",
    content: [
      {
        icon: "tabler-chart-donut",
        title:
          "Unraveling the Mysteries of Life: Exploring the Frontiers of Biology",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Biology and Human Health: Understanding the Interplay for Better Medical Solutions",
        url: { name: "dashboards-analytics" },
      },
    ],
  },
  {
    title: "Fisika",
    content: [
      {
        icon: "tabler-chart-donut",
        title:
          "Exploring the Quantum Frontier: Webinar on the Fundamentals and Applications of Modern Physics",
        url: { name: "dashboards-analytics" },
      },
      {
        icon: "tabler-chart-donut",
        title:
          "Physics in Everyday Life: Discovering the Marvels of the Universe through Webinar Sessions",
        url: { name: "dashboards-analytics" },
      },
    ],
  },
];

// 👉 No Data suggestion
const noDataSuggestions = [
  {
    icon: "tabler-chart-donut",
    title: "Growth mindset in Digital Era",
    url: { name: "dashboards-analytics" },
  },
  {
    icon: "tabler-chart-donut",
    title: "How to Make a Notion for College Students",
    url: { name: "dashboards-analytics" },
  },
  {
    icon: "tabler-chart-donut",
    title: "Immune System and Standard of Nutritional Adequacy",
    url: { name: "dashboards-analytics" },
  },
];

const searchQuery = ref("");
const searchResult = ref([]);
const router = useRouter();

// 👉 fetch search result API
watchEffect(() => {
  axios
    .get("/app-bar/search", { params: { q: searchQuery.value } })
    .then((response) => {
      searchResult.value = response.data;
    });
});

const redirectToSuggestedOrSearchedPage = (selected) => {
  router.push(selected.url);
  isAppSearchBarVisible.value = false;
  searchQuery.value = "";
};

const LazyAppBarSearch = defineAsyncComponent(() =>
  import("@core/components/AppBarSearch.vue")
);
</script>

<template>
  <div
    class="d-flex align-center cursor-pointer"
    v-bind="$attrs"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    <!-- 👉 Search Trigger button -->
    <VBtn icon variant="text" color="default" size="small">
      <VIcon icon="tabler-search" size="24" />
    </VBtn>

    <span
      v-if="appContentLayoutNav === 'vertical'"
      class="d-none d-md-flex align-center text-disabled"
    >
      <span class="me-3">Search keyword, department, webinar, stundent…</span>
      <span class="meta-key">&#8984;K</span>
    </span>
  </div>

  <!-- 👉 App Bar Search -->
  <LazyAppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    v-model:search-query="searchQuery"
    :search-results="searchResult"
    :suggestions="suggestionGroups"
    :no-data-suggestion="noDataSuggestions"
    @item-selected="redirectToSuggestedOrSearchedPage"
  >
    <!--
      <template #suggestions>
      use this slot if you want to override default suggestions
      </template>
    -->

    <!--
      <template #noData>
      use this slot to change the view of no data section
      </template>
    -->

    <!--
      <template #searchResult="{ item }">
      use this slot to change the search item
      </template>
    -->
  </LazyAppBarSearch>
</template>

<style lang="scss" scoped>
@use "@styles/variables/_vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: vuetify.$card-border-radius;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
