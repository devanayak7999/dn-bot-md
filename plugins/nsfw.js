const {
	inrl,
	config,
	getJson,
	getBuffer
} = require("../lib/");

inrl({
	pattern: 'ahegao ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ahegao?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'ass ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ass?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'bdsm ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/bdsm?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'blowjob ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/blowjob?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'cuckold ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/cuckold?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'cum ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/cum?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'eba ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/eba?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'ero ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ero?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'femdom ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/femdom?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'foot ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/foot?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'gangbang ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/gangbang?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'gifs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/gifs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'glasses ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/glasses?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'hentai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/hentai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'jahy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/jahy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'manga ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/manga?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'masturbation ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/masturbation?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'milf ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/milf?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'nsfwneko ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/nsfwneko?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'neko2 ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/neko2?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'nsfwloli ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/nsfwloli?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'orgy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/orgy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'panties ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/panties?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'pussy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/pussy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'tentacles ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/tentacles?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'thighs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/thighs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'yuri ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/yuri?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
inrl({
	pattern: 'zettai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/zettai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});



inrl({
	pattern: 'ahegao ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ahegao?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'ass ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ass?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'bdsm ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/bdsm?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'blowjob ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/blowjob?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'cuckold ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/cuckold?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'cum ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/cum?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'eba ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/eba?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'ero ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/ero?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'femdom ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/femdom?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'foot ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/foot?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'gangbang ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/gangbang?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'gifs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/gifs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'glasses ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/glasses?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'hentai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/hentai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'jahy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/jahy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'manga ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/manga?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'masturbation ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/masturbation?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'milf ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/milf?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'nsfwneko ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/nsfwneko?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'neko2 ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/neko2?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'nsfwloli ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/nsfwloli?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'orgy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/orgy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'panties ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/panties?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'pussy ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/pussy?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'tentacles ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/tentacles?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'thighs ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/thighs?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'yuri ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/yuri?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});

inrl({
	pattern: 'zettai ?(.*)',
	desc: 'generate images with command theme',
	type: 'nsfw',
	fromMe: true
}, async (message, match) => { 
	const url = await getJson(`${config.BASE_URL}api/nsfw/zettai?apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result.url), {}, 'image');
});
