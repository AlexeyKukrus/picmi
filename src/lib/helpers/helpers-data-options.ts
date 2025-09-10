export interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description?: string;
	ingredients?: string[];
}
export interface ProductInfo {
	[key: string]: Product;
}

export const ProductsListDataOption: Product[] = [
	{
		id: 1,
		title: 'Picmi Dark-Choco MG-4000 Bar with Espresso Snap',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-EspressoSnap.png',
		description:
			'This indulgent chocolate bar features the creamy smoothness of white chocolate blended with chunks of chocolate cookies, offering a perfect balance of sweetness and crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 2,
		title: 'Picmi Dark-Choco MG-4000 Bar with Fleur De Sel',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-FleurDeSel.png',
		description:
			'A sophisticated blend of dark chocolate with premium sea salt, creating a perfect harmony of rich cocoa and delicate saltiness.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 3,
		title: 'Picmi Dark-Choco MG-4000 Bar PB&J',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-PB&J.png',
		description:
			'Classic peanut butter and jelly combination wrapped in rich dark chocolate for a nostalgic yet gourmet experience.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 4,
		title: 'Picmi Milk-Choco MG-4000 Bar with Hazelnut',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-with.png',
		description:
			'Smooth milk chocolate combined with crunchy hazelnuts for a classic and satisfying treat.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 5,
		title: 'Picmi Milk-Choco MG-4000 Bar with Malted Crunch',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-MaltedCrunch.png',
		description:
			'Creamy milk chocolate with the nostalgic taste of malted milk balls for a delightful crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 6,
		title: 'Picmi Milk-Choco MG-4000 Bar with MixBerries',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-MixBerries.png',
		description:
			'Sweet milk chocolate enhanced with a medley of mixed berries for a fruity and refreshing taste.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 7,
		title: 'Picmi Milk-Choco MG-4000 Bar',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco.png',
		description:
			'Pure and simple milk chocolate bar with the perfect balance of sweetness and creaminess.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 8,
		title: 'Picmi White-Choco MG-4000 Bar with Caramel Machiato',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-CaramelMachiato.png',
		description:
			"Luxurious white chocolate infused with caramel macchiato flavors for a coffee lover's dream.",
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 9,
		title: 'Picmi White-Choco MG-4000 Bar with Cookies',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-Cookies.png',
		description:
			'This indulgent chocolate bar features the creamy smoothness of white chocolate blended with chunks of chocolate cookies, offering a perfect balance of sweetness and crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 10,
		title: 'Picmi White-Choco MG-4000 Bar with Fresas',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-Fresas.png',
		description:
			'Delicate white chocolate combined with fresh strawberry pieces for a light and fruity indulgence.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	{
		id: 11,
		title: 'Picmi Longsleeve',
		price: 59,
		image: '/assets/illustrations/PICMI-Sweatshirt.png',
		description: 'Comfortable and stylish long-sleeve shirt perfect for any casual occasion.',
		ingredients: ['100% Cotton']
	},
	{
		id: 12,
		title: 'Picmi Cap',
		price: 59,
		image: '/assets/illustrations/PICMI-Cap.png',
		description: 'Classic baseball cap with embroidered logo for a sporty and casual look.',
		ingredients: ['100% Cotton']
	},
	{
		id: 13,
		title: 'Picmi T shirt',
		price: 59,
		image: '/assets/illustrations/PICMI-Sweatshirt.png',
		description: 'Comfortable t-shirt made from high-quality materials for everyday wear.',
		ingredients: ['100% Cotton']
	},
	{
		id: 14,
		title: 'Picmi Tote bag',
		price: 59,
		image: '/assets/illustrations/PICMI-Tote-Bag.png',
		description: 'Stylish and practical tote bag perfect for shopping or carrying essentials.',
		ingredients: ['Canvas Material']
	}
];

export const ProductInfoDataOption: ProductInfo = {
	'1': {
		id: 1,
		title: 'Picmi Dark-Choco MG-4000 Bar with Espresso Snap',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-EspressoSnap.png',
		description:
			'This indulgent chocolate bar features the creamy smoothness of white chocolate blended with chunks of chocolate cookies, offering a perfect balance of sweetness and crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'2': {
		id: 2,
		title: 'Picmi Dark-Choco MG-4000 Bar with Fleur De Sel',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-FleurDeSel.png',
		description:
			'A sophisticated blend of dark chocolate with premium sea salt, creating a perfect harmony of rich cocoa and delicate saltiness.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'3': {
		id: 3,
		title: 'Picmi Dark-Choco MG-4000 Bar PB&J',
		price: 59,
		image: '/assets/illustrations/PICMI-DarkChoco-PB&J.png',
		description:
			'Classic peanut butter and jelly combination wrapped in rich dark chocolate for a nostalgic yet gourmet experience.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'4': {
		id: 4,
		title: 'Picmi Milk-Choco MG-4000 Bar with Hazelnut',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-with.png',
		description:
			'Smooth milk chocolate combined with crunchy hazelnuts for a classic and satisfying treat.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'5': {
		id: 5,
		title: 'Picmi Milk-Choco MG-4000 Bar with Malted Crunch',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-MaltedCrunch.png',
		description:
			'Creamy milk chocolate with the nostalgic taste of malted milk balls for a delightful crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'6': {
		id: 6,
		title: 'Picmi Milk-Choco MG-4000 Bar with MixBerries',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco-MixBerries.png',
		description:
			'Sweet milk chocolate enhanced with a medley of mixed berries for a fruity and refreshing taste.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'7': {
		id: 7,
		title: 'Picmi Milk-Choco MG-4000 Bar',
		price: 59,
		image: '/assets/illustrations/PICMI-MilkChoco.png',
		description:
			'Pure and simple milk chocolate bar with the perfect balance of sweetness and creaminess.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'8': {
		id: 8,
		title: 'Picmi White-Choco MG-4000 Bar with Caramel Machiato',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-CaramelMachiato.png',
		description:
			"Luxurious white chocolate infused with caramel macchiato flavors for a coffee lover's dream.",
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'9': {
		id: 9,
		title: 'Picmi White-Choco MG-4000 Bar with Cookies',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-Cookies.png',
		description:
			'This indulgent chocolate bar features the creamy smoothness of white chocolate blended with chunks of chocolate cookies, offering a perfect balance of sweetness and crunch.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'10': {
		id: 10,
		title: 'Picmi White-Choco MG-4000 Bar with Fresas',
		price: 59,
		image: '/assets/illustrations/PICMI-WhiteChoco-Fresas.png',
		description:
			'Delicate white chocolate combined with fresh strawberry pieces for a light and fruity indulgence.',
		ingredients: [
			"Organic Lion's Mane (Hericium erinaceus)",
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	},
	'11': {
		id: 11,
		title: 'Picmi Longsleeve',
		price: 59,
		image: '/assets/illustrations/PICMI-Sweatshirt.png',
		description: 'Comfortable and stylish long-sleeve shirt perfect for any casual occasion.',
		ingredients: ['100% Cotton']
	},
	'12': {
		id: 12,
		title: 'Picmi Cap',
		price: 59,
		image: '/assets/illustrations/PICMI-Cap.png',
		description: 'Classic baseball cap with embroidered logo for a sporty and casual look.',
		ingredients: ['100% Cotton']
	},
	'13': {
		id: 13,
		title: 'Picmi T shirt',
		price: 59,
		image: '/assets/illustrations/PICMI-Sweatshirt.png',
		description: 'Comfortable t-shirt made from high-quality materials for everyday wear.',
		ingredients: ['100% Cotton']
	},
	'14': {
		id: 14,
		title: 'Picmi Tote bag',
		price: 59,
		image: '/assets/illustrations/PICMI-Tote-Bag.png',
		description: 'Stylish and practical tote bag perfect for shopping or carrying essentials.',
		ingredients: ['Canvas Material']
	}
};

export interface Article {
	id: number;
	title: string;
	background: string;
}

export const ArticlesListDataOption: Article[] = [
	{
		id: 1,
		title: 'How To Identify An Authentic picmi Bar',
		background: '/assets/backgrounds/article_blue.png'
	},
	{
		id: 2,
		title: 'Science-Backed Functional Mushrooms',
		background: '/assets/backgrounds/article_orange.png'
	},
	{
		id: 3,
		title: 'Verify Your Product via Blockchain ',
		background: '/assets/backgrounds/article_violet.png'
	},
	{
		id: 4,
		title: 'How To Identify An Authentic picmi Bar',
		background: '/assets/backgrounds/article_blue.png'
	},
	{
		id: 5,
		title: 'Science-Backed Functional Mushrooms',
		background: '/assets/backgrounds/article_orange.png'
	},
	{
		id: 6,
		title: 'Verify Your Product via Blockchain ',
		background: '/assets/backgrounds/article_violet.png'
	}
];

export interface Mashroom {
	title: string;
	img: string;
	text: string;
}

export const AboutMushroomsDataOption: Mashroom[] = [
	{
		title: 'Turkey tail',
		img: '/assets/illustrations/turkey-tail.png',
		text: 'One of the most researched medicinal mushrooms for its powerful polysaccharides. The beta glucans and bioactive compounds in Turkey Tail support immune health, aid in detoxification, and promote liver function.'
	},
	{
		title: 'Lions mane',
		img: '/assets/illustrations/lions-mane.png',
		text: 'Used in Traditional Chinese medicine for digestion and sleep, has significant brain-boosting properties. It promotes the growth and function of nerve cells, supporting cognitive and neurological health. Daily use improves memory, mood, and reduces anxiety and depression.'
	},
	{
		title: 'Reishi',
		img: '/assets/illustrations/reishi.png',
		text: 'Known as the "Mushroom of Immortality" in Traditional Chinese Medicine, balances and modulates the immune system, supports cardiovascular health, and acts as a superior adaptogen for mental and physical stress.'
	},
	{
		title: 'Cordyceps',
		img: '/assets/illustrations/cordyceps.png',
		text: 'Cordyceps improves vitality and endurance by supporting respiration, energy production, and ATP synthesis. It enhances aerobic endurance in athletes and general vitality in seniors, increases circulation, and enhances male sexual performance and female reproductive health.'
	}
];
