<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="/newpage/a"
                class="list-group-item list-group-item-action" aria-current="true">
                元件 A</router-link>
                <router-link to="/newpage/b"
                class="list-group-item list-group-item-action">
                元件 B</router-link>
                <router-link to="/newpage/nameview/c2a"
                class="list-group-item list-group-item-action">
                元件 C2A</router-link>
                <router-link to="/newpage/nameview/a2b"
                class="list-group-item list-group-item-action">
                元件 A2B</router-link>
                <router-link to="/newpage/dynamic/:id"
                class="list-group-item list-group-item-action">
                dynamic</router-link>
                <router-link to="/newpage/navigation"
                class="list-group-item list-group-item-action">
                Navigation</router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
