<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

const { locale, setLocale } = useI18n() as any

// Function to change language
const changeLang = (lang: string) => {
    // Setting locale
    setLocale(lang)
    // Storing selected language in localStorage
    localStorage.setItem("selectedLanguage", JSON.stringify(lang));
    // Accessing HTML element
    const htmlElement = document.documentElement;
    // Setting direction and language attributes based on selected language
    if (lang === "ar") {
        htmlElement.setAttribute("dir", "rtl"); // Set direction to right-to-left for Arabic
        htmlElement.setAttribute("lang", "ar"); // Set language to Arabic
    } else {
        htmlElement.setAttribute("dir", "ltr"); // Set direction to left-to-right for English
        htmlElement.setAttribute("lang", "en"); // Set language to English
    }
}

// Function to check stored language preference and apply it
const checkLang = () => {
    try {
        let selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage')) || 'ar';
        changeLang(selectedLanguage ? selectedLanguage : 'ar')
    } catch (error) {
        console.error('Error parsing language:', error);
    }
};
// Calling checkLang function to set initial language
onMounted(() => {
    checkLang();
})
</script>

<template>
    <div class="dropdown">
        <el-dropdown trigger="click">
            <el-button type="primary">
                {{ locale == 'ar' ? 'عربي' : 'English' }} <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
                    <el-dropdown-item @click="changeLang('ar')">عربي</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
