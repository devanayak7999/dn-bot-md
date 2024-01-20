const {
        inrl,
        getJson,
        config,
        getBuffer
} = require('../lib');

inrl({
	pattern: 'flaming ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/flaming?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'shadow-sky ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/shadow-sky?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'metallic ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/metallic?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'naruto ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/naruto?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'pubg ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/pubg?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'under-grass ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/under-grass?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'harry-potter ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/harry-potter?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'flower-typography ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/flower-typography?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'picture-of-love ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/picture-of-love?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'coffee-cup ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/coffee-cup?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'butterfly ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/butterfly?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'night-sky ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/night-sky?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'carved-wood ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/carved-wood?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'illuminated-metallic ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/illuminated-metallic?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});

inrl({
	pattern: 'sweet-candy ?(.*)',
	desc: "generate images with command theme",
	type: 'photooxy'
}, async (message, match, cmd) => {
	if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
	const url = await getJson(`${config.BASE_URL}api/photooxy/sweet-candy?text=${match}&apikey=${config.INRL_KEY}`);
	if (!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
	return await message.send(await getBuffer(url.result), {}, "image");
});
