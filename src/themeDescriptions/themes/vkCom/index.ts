import {ThemeVkComDescription} from '@/interfaces/themes/vkCom';
import {ThemeVkComDarkDescription} from '@/interfaces/themes/vkComDark';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/vk';

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	themeName: 'vkCom',

	sizeBorderRadius: {
		regular: 8,
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...vkComTheme,
	...darkTheme,
	themeName: 'vkComDark',
	colorsScheme: 'dark',
};
