<template>
  <div>
      <input
        type="email"
        id="email"
        pattern="^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
        size="30"
        maxlength="30"
        autocomplete="on"
        required
        placeholder="メールアドレス"
        class="border rounded border-black w-full h-12 px-3"
      >
  </div>
</template>