const {
	inrl,
	config,
	getJson,
	lang,
	getBuffer
} = require('../lib');

inrl({
		pattern: 'husbu ?(.*)',
		desc: 'generate images with command theme',
		type: 'anime'
	}, async (message, match, cmd) => {
		const url = await getJson(`${config.BASE_URL}api/anime/husbu?apikey=${config.INRL_KEY}`);
		if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
		return await message.send(await getBuffer(url.result.url), {}, 'image');
	});
inrl({
	pattern: 'loli ?(.*)',
	desc: 'generate images with command theme',
	type: 'anime'
}, async (message, match, cmd) => {
	const url = await getJson(`${config.BASE_URL}api/anime/loli?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'neko ?(.*)',
	desc: 'generate images with command theme',
	type: 'anime'
}, async (message, match, cmd) => {
	const url = await getJson(`${config.BASE_URL}api/anime/neko?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'shota ?(.*)',
	desc: 'generate images with command theme',
	type: 'anime'
}, async (message, match, cmd) => {
	const url = await getJson(`${config.BASE_URL}api/anime/shota?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'wifu ?(.*)',
	desc: 'generate images with command theme',
	type: 'anime'
}, async (message, match, cmd) => {
	const url = await getJson(`${config.BASE_URL}api/anime/wifu?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
