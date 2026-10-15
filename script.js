(function () {
    'use strict';

    /* ------------------------------------------------------------------
       Site registry.

       Everything shared between pages lives here: page titles, subtitles,
       sidebar entries, meta descriptions and the generated index lists.
       A page's own .html file holds nothing but its content.

       To add a page:
         1. create the .html with the standard three-line skeleton
         2. add one entry to the game's `pages` array below

       To add a game: add one object to GAMES.
       ------------------------------------------------------------------ */

    const SITE = {
        brand: 'BrewSearch Reverse Engineering Wiki',
        sub: 'Reverse engineering documentation for games',
        description: 'BrewSearch Reverse Engineering Wiki - reverse engineering documentation for game file formats and game internals.',
        icon: '\u{1F4D6}',
        themeColor: '#0e1a2b'
    };

    const GAMES = [
        {
            name: 'Disgaea DS',
            dir: 'DisgaeaDS',
            home: 'disgaeads.html',
            sub: 'Disgaea DS reverse engineering documentation',
            blurb: 'file formats, ROM structure, and reverse engineering notes',
            pages: [
                {
                    file: 'archive/dsarcfl.html',
                    label: 'DSARCFL',
                    tag: 'archive',
                    sub: 'DSARC FL archive format specification',
                    blurb: 'archive container for audio / music / sound effects'
                },
                {
                    file: 'archive/dseq.html',
                    label: 'DSEQ',
                    tag: 'music',
                    sub: 'Music archive format (.msnd)',
                    blurb: 'music archive bundling SSEQ + SBNK + SWAR'
                },
                {
                    file: 'audio/sbnk.html',
                    label: 'SBNK',
                    tag: 'bank',
                    sub: 'Sound bank - instrument mapping',
                    blurb: 'sound bank mapping instruments to samples'
                },
                {
                    file: 'audio/sseq.html',
                    label: 'SSEQ',
                    tag: 'sequence',
                    sub: 'Sequenced instruction format for music',
                    blurb: 'sequenced instruction format for music'
                },
                {
                    file: 'audio/strm.html',
                    label: 'STRM',
                    tag: 'stream',
                    sub: 'Nintendo DS streamed audio',
                    blurb: 'Nintendo DS streamed audio (used for sound effects)'
                },
                {
                    file: 'audio/swar.html',
                    label: 'SWAR',
                    tag: 'wave archive',
                    sub: 'Wave archive containing SWAV files',
                    blurb: 'wave archive containing SWAV files'
                },
                {
                    file: 'audio/swav.html',
                    label: 'SWAV',
                    tag: 'wave',
                    sub: 'Nintendo DS wave audio container',
                    blurb: 'Nintendo DS wave audio container'
                },
                {
                    file: 'compression/imy.html',
                    label: 'IMY',
                    tag: 'image',
                    sub: 'Compressed image format',
                    blurb: 'compressed image format'
                },
                {
                    file: 'map/mpd.html',
                    label: 'MPD',
                    tag: 'map',
                    sub: 'Tile-based map data',
                    blurb: 'tile-based map data'
                },
                {
                    file: 'map/mpds.html',
                    label: 'MPDS',
                    tag: 'compressed',
                    sub: 'Compressed MPD map file',
                    blurb: 'compressed MPD map file'
                }
            ]
        },
        {
            name: 'Suzumiya Haruhi no Chourantou / Gekitou',
            dir: 'Harutou',
            home: 'harutou.html',
            sub: 'Suzumiya Haruhi no Chourantou / Gekitou reverse engineering documentation',
            blurb: 'archive container, textures, models, animation, and data layout',
            pages: [
                {
                    file: 'archive/bin.html',
                    label: 'BIN',
                    tag: 'archive',
                    sub: 'Nested archive container (data/*.bin)',
                    blurb: 'recursively nested archive container used by every <code>data/*.bin</code> file'
                },
                {
                    file: 'texture/ringtex2.html',
                    label: 'RINGTEX2',
                    tag: 'texture',
                    sub: 'Uncompressed BGRA texture',
                    blurb: 'uncompressed BGRA texture'
                },
                {
                    file: 'model/model.html',
                    label: 'Model',
                    tag: 'model',
                    sub: 'Skinned model blob',
                    blurb: 'skinned model blob: node graph, meshes, materials, embedded textures'
                },
                {
                    file: 'animation/anim.html',
                    label: 'Animation',
                    tag: 'animation',
                    sub: 'Keyframed animation clip',
                    blurb: 'one keyframed clip per blob, matched to a model by node name'
                },
                {
                    file: 'audio/audio.html',
                    label: 'Audio',
                    tag: 'audio',
                    sub: 'Ogg Vorbis and RIFF WAVE payloads',
                    blurb: 'Ogg Vorbis and RIFF WAVE payloads, no custom container'
                },
                {
                    file: 'effect/btef.html',
                    label: 'BTEF',
                    tag: 'effect',
                    sub: 'Effect script blob',
                    blurb: 'effect script blob, not reverse-engineered'
                },
                {
                    file: 'data/tables.html',
                    label: 'Data tables',
                    tag: 'tables',
                    sub: 'Gameplay tables, shader bytecode and UI data',
                    blurb: 'gameplay tables, shader bytecode and UI data, not reverse-engineered'
                }
            ]
        },
        {
            name: 'Virtuos DS Racing Game Engine',
            dir: 'Kartz',
            home: 'kartz.html',
            sub: 'Virtuos DS Racing Game Engine reverse engineering documentation',
            blurb: 'archive triple, textures, track geometry, display lists, and resource databases for Madagascar Kartz, DreamWorks Super Star Kartz, Hot Wheels: Battle Force 5, Pimp My Ride: Street Racing and Monster Jam: Path of Destruction',
            pages: [
                {
                    file: 'archive/gda.html',
                    label: 'GDA',
                    tag: 'archive',
                    sub: 'Archive triple - GDA, GDF and GDT',
                    blurb: 'three-file archive: raw data, path table, offset/size table'
                },
                {
                    file: 'texture/5tx.html',
                    label: '5TX',
                    tag: 'texture',
                    sub: 'NTTX texture container',
                    blurb: 'Nintendo DS texture container with PALT and IMGE sections'
                },
                {
                    file: 'track/trk.html',
                    label: 'TRK',
                    tag: 'track',
                    sub: 'Track geometry container',
                    blurb: 'track geometry: chunk tables, texture references, and tail sections'
                },
                {
                    file: 'track/displaylist.html',
                    label: 'Display list',
                    tag: 'geometry',
                    sub: 'Nintendo DS GX command stream inside a chunk',
                    blurb: 'the GX opcode stream a TRK chunk carries, and the shape real chunks use'
                },
                {
                    file: 'resource/rdf.html',
                    label: 'RDF',
                    tag: 'resources',
                    sub: 'Resource database and texture slot table',
                    blurb: 'the serialised object tree, and the texture slot table a TRK indexes'
                },
                {
                    file: 'resource/raf.html',
                    label: 'RAF',
                    tag: 'relocations',
                    sub: 'Pointer fixup table for an RDF',
                    blurb: 'the pointer offsets an RDF needs patched at load time'
                },
                {
                    file: 'track/col.html',
                    label: 'COL',
                    tag: 'collision',
                    sub: 'Collision surface layout and sector records',
                    blurb: 'the cross-section chain, sector records and collision import rules'
                },
                {
                    file: 'track/bpvs.html',
                    label: 'BPVS',
                    tag: 'visibility',
                    sub: 'Chunk visibility run lists',
                    blurb: 'the per-sector run-length lists that say which chunks to draw'
                },
                {
                    file: 'data/zon.html',
                    label: 'ZON',
                    tag: 'scenery',
                    sub: 'Scenery bundle layout',
                    blurb: 'the model bundle of track-format chunks and its per-model records'
                },
                {
                    file: 'data/car.html',
                    label: 'CAR',
                    tag: 'vehicle',
                    sub: 'Vehicle and prop model layout',
                    blurb: 'the rigid model, its chunk table and its wheel block'
                },
                {
                    file: 'data/amd.html',
                    label: 'AMD',
                    tag: 'character',
                    sub: 'Character model layout and skinning',
                    blurb: 'the skinned model, its bone table and its display-list skin'
                },
                {
                    file: 'data/ske.html',
                    label: 'SKE',
                    tag: 'skeleton',
                    sub: 'Skeleton layout',
                    blurb: 'the parented bones and their rest transforms'
                },
                {
                    file: 'data/ani.html',
                    label: 'ANI',
                    tag: 'animation',
                    sub: 'Animation clip layout',
                    blurb: 'the per-bone matrix tracks and frame poses'
                },
                {
                    file: 'data/other.html',
                    label: 'Decoded assets',
                    tag: 'assets',
                    sub: 'Spec overview, verification and known limits',
                    blurb: 'spec index, round-trip totals, editing rules and known limits'
                }
            ]
        }
    ];

    /* ------------------------------------------------------------------
       Derived page table. `path` is always relative to the wiki root.
       ------------------------------------------------------------------ */

    const HOME = {
        path: 'index.html',
        title: SITE.brand,
        heading: SITE.brand,
        sub: SITE.sub,
        description: SITE.description,
        list: 'games'
    };

    const PAGES = [HOME];

    GAMES.forEach(function (game) {
        game.path = game.dir + '/' + game.home;

        PAGES.push({
            path: game.path,
            game: game,
            title: game.name + ' Wiki - File Formats',
            heading: 'Home',
            sub: game.sub,
            description: game.name + ' file format reference: ' +
                game.pages.map(function (page) { return page.label; }).join(', ') + '.',
            list: 'formats'
        });

        game.pages.forEach(function (page) {
            page.path = game.dir + '/' + page.file;
            page.game = game;
            page.title = page.label + ' \u00B7 ' + game.name + ' Wiki';
            page.heading = page.label;
            page.description = page.label + ' - ' + stripTags(page.blurb) +
                '. File format documentation for ' + game.name + '.';
            PAGES.push(page);
        });
    });

    function stripTags(html) {
        return html.replace(/<[^>]*>/g, '');
    }

    /* ------------------------------------------------------------------
       Location. Every generated link is absolute, resolved against the
       directory this script was loaded from, so page depth never matters.
       ------------------------------------------------------------------ */

    const src = document.currentScript.src;
    const ROOT = src.slice(0, src.lastIndexOf('/') + 1);

    function url(path) {
        return ROOT + path;
    }

    function currentPath() {
        const here = location.href.split('#')[0].split('?')[0];
        if (here.indexOf(ROOT) !== 0) return '';

        const rel = decodeURIComponent(here.slice(ROOT.length));
        return rel === '' || rel.slice(-1) === '/' ? rel + 'index.html' : rel;
    }

    const path = currentPath();
    const page = PAGES.filter(function (entry) { return entry.path === path; })[0] || null;

    /* ------------------------------------------------------------------
       Head. Written while the head is still parsing, so the stylesheet
       lands before first paint.
       ------------------------------------------------------------------ */

    function element(tag, attributes) {
        const node = document.createElement(tag);
        Object.keys(attributes).forEach(function (name) {
            node.setAttribute(name, attributes[name]);
        });
        return node;
    }

    function buildHead() {
        const favicon = 'data:image/svg+xml,' + encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
            '<text y=".9em" font-size="90">' + SITE.icon + '</text></svg>'
        );

        document.head.appendChild(element('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }));
        document.head.appendChild(element('meta', {
            name: 'theme-color',
            content: SITE.themeColor
        }));
        document.head.appendChild(element('meta', {
            name: 'description',
            content: page ? page.description : SITE.description
        }));
        document.head.appendChild(element('link', { rel: 'icon', href: favicon }));
        document.head.appendChild(element('link', { rel: 'stylesheet', href: url('style.css') }));

        document.title = page ? page.title : SITE.brand;
    }

    /* ------------------------------------------------------------------
       Sidebar.
       ------------------------------------------------------------------ */

    function sidebarItem(entry, label, tag) {
        const active = entry.path === path;

        return '<a class="sidebar-item' + (active ? ' active' : '') + '"' +
            ' href="' + url(entry.path) + '"' +
            (active ? ' aria-current="page"' : '') + '>' +
            '<span class="item-label">' + label + '</span>' +
            (tag ? '<span class="item-tag">' + tag + '</span>' : '') +
            '</a>';
    }

    function buildSidebar() {
        const sections = GAMES.map(function (game) {
            const items = [sidebarItem(game, 'Home')].concat(
                game.pages.map(function (entry) {
                    return sidebarItem(entry, entry.label, entry.tag);
                })
            );

            return '<div class="sidebar-section">' +
                '<div class="sidebar-section-title">' + game.name + '</div>' +
                items.join('') +
                '</div>';
        });

        return '<a class="skip-link" href="#main">Skip to content</a>' +
            '<button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle navigation">' +
            '<span class="menu-icon">\u2630</span><span class="close-icon">\u2715</span></button>' +
            '<div class="sidebar-overlay" id="sidebarOverlay"></div>' +
            '<nav class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">' +
            '<div class="sidebar-brand"><a href="' + url(HOME.path) + '">' +
            '<span class="brand-icon">' + SITE.icon + '</span>' +
            '<span>' + SITE.brand + '</span>' +
            '</a></div>' +
            '<div class="sidebar-nav">' + sections.join('') + '</div>' +
            '</nav>';
    }

    /* ------------------------------------------------------------------
       Generated index lists. A page opts in with <ul data-list></ul>;
       which list it gets follows from the page itself.
       ------------------------------------------------------------------ */

    function listItems() {
        if (!page) return [];

        if (page.list === 'games') {
            return GAMES.map(function (game) {
                return '<a href="' + url(game.path) + '">' + game.name + '</a> - ' + game.blurb;
            });
        }

        if (page.list === 'formats') {
            return page.game.pages.map(function (entry) {
                return '<a href="' + url(entry.path) + '">' + entry.label + '</a> - ' + entry.blurb;
            });
        }

        return [];
    }

    function fillLists() {
        const items = listItems();

        [].forEach.call(document.querySelectorAll('[data-list]'), function (node) {
            node.innerHTML = items.map(function (item) {
                return '<li>' + item + '</li>';
            }).join('');
        });
    }

    /* ------------------------------------------------------------------
       Page shell. The body of a page file is its content and nothing
       else; the header, the badge and the wrappers are added here.
       ------------------------------------------------------------------ */

    function buildPage() {
        const content = document.createElement('div');
        content.className = 'page-content';

        while (document.body.firstChild) {
            content.appendChild(document.body.firstChild);
        }

        if (page && page.tag) {
            const first = content.querySelector('p');
            if (first) {
                first.insertAdjacentHTML('afterbegin',
                    '<span class="badge">' + page.tag + '</span> ');
            }
        }

        const header = document.createElement('div');
        header.className = 'page-header';
        header.innerHTML =
            '<h1>' + (page ? page.heading : document.title) + '</h1>' +
            (page && page.sub ? '<div class="page-sub">' + page.sub + '</div>' : '');

        const wrapper = document.createElement('div');
        wrapper.id = 'content';
        wrapper.appendChild(header);
        wrapper.appendChild(content);

        const main = document.createElement('main');
        main.className = 'main';
        main.id = 'main';
        main.setAttribute('role', 'main');
        main.setAttribute('tabindex', '-1');
        main.appendChild(wrapper);

        document.body.appendChild(main);
        document.body.insertAdjacentHTML('afterbegin', buildSidebar());

        fillLists();
    }

    /* ------------------------------------------------------------------
       Sidebar behaviour (mobile).
       ------------------------------------------------------------------ */

    function closeSidebar() {
        document.body.classList.remove('sidebar-open');
    }

    document.addEventListener('click', function (event) {
        if (event.target.closest('#sidebarToggle')) {
            document.body.classList.toggle('sidebar-open');
        }
        if (event.target.id === 'sidebarOverlay') {
            closeSidebar();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeSidebar();
        }
    });

    buildHead();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildPage);
    } else {
        buildPage();
    }
})();
