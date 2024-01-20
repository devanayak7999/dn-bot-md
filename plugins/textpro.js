const {
        inrl,
        getJson,
        config,
        getBuffer
} = require('../lib');

inrl({
        pattern: 'dragon ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/dragon?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'pornhub ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/pornhub?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'blood ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/blood?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: '1917 ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/1917?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'marvel ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/marvel?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'spooky ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/spooky?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'toxic ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/toxic?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'avengers ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/avengers?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'gameover ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/gameover?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'window ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/window?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'summer ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/summer?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'forework ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/forework?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'sliced ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/sliced?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'naruto ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/naruto?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: '3dbox ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/3dbox?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'batman ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/batman?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'dropwater ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);;
        const url = await getJson(`${config.BASE_URL}api/textpro/dropwater?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'sand ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/sand?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'palm ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/palm?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'lava ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/lava?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'pottery ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/pottery?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'wall ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/wall?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'slime ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/slime?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'skeleton ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/skeleton?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'business ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/business?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'star ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/star?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'typography ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/typography?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'natural ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/natural?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'birthday ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/birthday?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'road ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/road?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'pokemon ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/pokemon?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'magma ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/magma?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'carbon ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/carbon?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'giraffe ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/giraffe?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'metallic ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/metallic?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'eroded ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/eroded?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'gold ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/gold?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'deep ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/deep?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'scary ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/scary?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'ancient ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/ancient?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'captain ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/captain?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
inrl({
        pattern: 'whitegold ?(.*)',
        desc: "generate images with command theme",
        type: 'textpro'
}, async (message, match, cmd) => {
        if (!match) return await message.send(`*_give me a text to add over image_*\n*_Example :_*\n\n_*${cmd}* hi|its me inrl_`);
        const url = await getJson(`${config.BASE_URL}api/textpro/whitegold?text=${match}&apikey=${config.INRL_KEY}`);
        if(!url.status) return await message.send(`Please enter a new apikey, as the given apikey limit has been exceeded. Visit ${config.BASE_URL}api/signup for gettig a new apikey. setvar inrl_key: your apikey`);
        return await message.send(await getBuffer(url.result), {}, "image");
});
