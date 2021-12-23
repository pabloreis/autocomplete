<template>
  <div
    class="autocomplete flex-column"
    :class="{
      'autocomplete--active': hasOptions || isOptionListEmpty,
      'autocomplete--focused': isInputFocused
    }"
  >
    <div class="autocomplete__search-wrapper flex">
      <i :class="`fa fa-${icon}`"></i>

      <input
        ref="search"
        v-model="search"
        type="text"
        class="autocomplete__search"
        :placeholder="placeholder"
        @focus="toggleInputFocus"
        @blur="toggleInputFocus"
      />

      <i
        v-if="isSearchDisabled"
        class="fa fa-exclamation-circle"
        @mouseenter="toggleMouseHover"
        @mouseleave="toggleMouseHover"
      ></i>

      <div v-show="isMouseHovered" class="autocomplete__alert-message">
        Type at least 3 characters
      </div>
    </div>

    <ul v-if="hasOptions" class="autocomplete__options">
      <template v-for="option in autocompleteSearchOptions">
        <li v-html="highLightMatchedLabel(option.label)" :key="option.key">
        </li>
      </template>
    </ul>

    <div v-if="isOptionListEmpty" class="autocomplete__empty">
      No results found.
    </div>
  </div>
</template>

<script lang="ts" src="./Autocomplete.ts"></script>
