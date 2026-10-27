const image = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;
const SUPABASE_URL = 'https://myondesuebvxcztfwuyl.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XGjJqMt7N5tigY381QrOvQ_8u4xGSl8';
const seedCards = [
  { id: 'a1', type: 'video', title: '海边公路，镜头跟着风走', note: '不是追着人物拍，是让海风先走一步。长焦压缩空间，留一点呼吸感。', tags: ['运镜', '公路片', '松弛感'], project: '在路上', date: '10.26', fullDate: '2026-10-26', image: image('photo-1500530855697-b586d89ba3ee'), duration: '00:18', source: 'https://www.youtube.com/' },
  { id: 'a2', type: 'image', title: '雨后的京都，红色刚好', note: '湿润的路面像第二层天空。红色只出现一次，反而更记得住。', tags: ['色彩', '街头', '氛围'], project: '城市散步', date: '10.25', fullDate: '2026-10-25', image: image('photo-1519501025264-65ba15a82390'), duration: '' },
  { id: 'a3', type: 'note', title: '关于留白的一点想法', note: '剪辑不是把所有好镜头都放进去，而是知道什么时候该让观众自己感受。留白也是一种声音。', tags: ['剪辑思路', '节奏'], project: '未分类', date: '10.24', fullDate: '2026-10-24', paper: '好看的镜头很多，\n舍得留白更难。' },
  { id: 'a4', type: 'video', title: '清晨山谷｜雾慢慢散开的过程', note: '固定机位延时，前景的树枝轻轻入画。做片头的呼吸段落很适合。', tags: ['自然', '片头', '慢节奏'], project: '在路上', date: '10.23', fullDate: '2026-10-23', image: image('photo-1470252649378-9c29740c9fa8'), duration: '00:32' },
  { id: 'a5', type: 'image', title: '家里的光，像电影里的下午', note: '百叶窗的影子落在旧木桌上，颗粒感可以留一点，不必太干净。', tags: ['光影', '生活感'], project: '日常切片', date: '10.22', fullDate: '2026-10-22', image: image('photo-1449247709967-d4461a6a6103'), duration: '' },
  { id: 'a6', type: 'video', title: '一颗橙子的三种声音', note: '剥开、切开、落进水里。特写配拟音，画面极简但特别有质感。', tags: ['声音设计', '特写', '创意'], project: '日常切片', date: '10.21', fullDate: '2026-10-21', image: image('photo-1547514701-42782101795e'), duration: '00:11' },
  { id: 'a7', type: 'note', title: '想做一个没有旁白的旅行片', note: '用环境声和人的动作把故事讲完。开场从一扇车窗开始，不交代地点。', tags: ['选题', '旅行'], project: '在路上', date: '10.20', fullDate: '2026-10-20', paper: '从车窗开始，\n不急着说去哪。' },
  { id: 'a8', type: 'image', title: '旧电影里的蓝，带一点灰', note: '冷色不一定要饱和。低对比的蓝灰色，让回忆看起来更柔软。', tags: ['调色', '复古', '情绪'], project: '城市散步', date: '10.19', fullDate: '2026-10-19', image: image('photo-1518837695005-2083093ee35b'), duration: '' },
  { id: 'a9', type: 'video', title: '电车进站，切在音乐的空拍', note: '用车轮摩擦声做前导，音乐进来的时候刚好切到车窗里的倒影。', tags: ['节奏', '转场', '城市'], project: '城市散步', date: '10.18', fullDate: '2026-10-18', image: image('photo-1519608487953-e999c86e7455'), duration: '00:24' },
  { id: 'a10', type: 'image', title: '山顶的云，像一块慢镜头', note: '静止画面里有足够多的变化。适合放在情绪转折之后。', tags: ['自然', '慢镜头'], project: '在路上', date: '10.17', fullDate: '2026-10-17', image: image('photo-1464822759023-fed622ff2c3b'), duration: '' },
  { id: 'a11', type: 'video', title: '手持跟拍｜一段没有目的地的散步', note: '轻微晃动不是问题，稳定器不要把生活感也一起稳定掉。', tags: ['手持', '生活感', '运镜'], project: '日常切片', date: '10.16', fullDate: '2026-10-16', image: image('photo-1470770841072-f978cf4d019e'), duration: '00:39' },
  { id: 'a12', type: 'note', title: '配乐备忘：先听空间，再听旋律', note: '氛围音可以先铺出空间，旋律晚一点进来。给画面留出自己的节奏。', tags: ['音乐', '声音设计'], project: '未分类', date: '10.15', fullDate: '2026-10-15', paper: '先听见空间，\n再听见旋律。' },
  { id: 'a13', type: 'technique', title: 'J-cut：让声音先于画面抵达', note: '下一场的声音提前进来，观众会先听见空间，再看见新的画面。适合从室内走向街道的转场。', tags: ['J-cut', '声音设计', '转场'], project: '剪辑手法', date: '10.14', fullDate: '2026-10-14', technique: 'J-CUT\n声音先行' },
  { id: 'a14', type: 'technique', title: '动作匹配剪辑', note: '在两个不同场景里寻找相同方向的动作，让剪切藏在动作里，画面会自然地流动起来。', tags: ['匹配剪辑', '转场', '节奏'], project: '剪辑手法', date: '10.13', fullDate: '2026-10-13', technique: 'MATCH CUT\n动作接动作' },
];
const seedProjects = ['在路上', '城市散步', '日常切片', '剪辑手法', '未分类'];
const typeNames = { video: '视频', image: '影像', technique: '剪辑手法', note: '手记' };
const read = (key, fallback) => { try { const parsed = JSON.parse(localStorage.getItem(key)); return parsed ?? fallback; } catch { return fallback; } };
const hasLocalSnapshot = localStorage.getItem('frame-notes-cards') !== null;
let cards = read('frame-notes-cards', seedCards);
let projects = read('frame-notes-projects', seedProjects);
let favorites = read('frame-notes-favorites', ['a1', 'a5', 'a8']);
let view = 'all';
let filterType = 'all';
let filterTag = '';
let filterProject = '';
let searchTerm = '';
let oldestFirst = false;
let selectedId = null;
let layout = 'grid';
let cloud = null;
let cloudUser = null;
let syncTimer = null;
let localSyncOwner = localStorage.getItem('frame-notes-sync-owner') || '';
if (!projects.includes('剪辑手法')) projects.splice(Math.max(0, projects.length - 1), 0, '剪辑手法');
if (!cards.some((card) => card.type === 'technique')) cards = [...cards, ...seedCards.filter((card) => card.type === 'technique')];

const $ = (selector) => document.querySelector(selector);
const cardGrid = $('#cardGrid');
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
const cloudState = () => ({ cards, projects, favorites });
const setSyncStatus = (label, state = '') => {
  $('#syncStatus').textContent = label;
  $('#syncDot').className = `sync-dot ${state}`.trim();
};
const readCoverImage = async (file) => {
  if (!file) return '';
  if (!file.type.startsWith('image/')) throw new Error('请选择图片文件');
  if (file.size > 15 * 1024 * 1024) throw new Error('图片太大，请选择 15MB 以内的图片');
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 1000 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL('image/jpeg', 0.78);
};
const save = () => {
  localStorage.setItem('frame-notes-cards', JSON.stringify(cards));
  localStorage.setItem('frame-notes-projects', JSON.stringify(projects));
  localStorage.setItem('frame-notes-favorites', JSON.stringify(favorites));
  if (cloud && cloudUser) {
    setSyncStatus('正在同步…', 'syncing');
    clearTimeout(syncTimer);
    syncTimer = setTimeout(syncToCloud, 500);
  }
};
const syncToCloud = async () => {
  if (!cloud || !cloudUser) return;
  const { error } = await cloud.from('frame_notes_data').upsert({
    user_id: cloudUser.id,
    state: cloudState(),
    updated_at: new Date().toISOString()
  }, { onConflict: 'user_id' });
  if (error) {
    setSyncStatus('同步失败', 'sync-error');
    showToast('云端同步失败，请检查网络或数据库设置');
    return;
  }
  setSyncStatus('已同步到云端', 'synced');
};
const loadCloudState = async (user) => {
  cloudUser = user;
  $('#authButtonText').textContent = '退出登录';
  setSyncStatus('正在读取云端…', 'syncing');
  const { data, error } = await cloud.from('frame_notes_data').select('state').eq('user_id', user.id).maybeSingle();
  if (error) {
    cloudUser = null;
    $('#authButtonText').textContent = '登录以同步';
    setSyncStatus('云端未就绪', 'sync-error');
    showToast('请先完成 Supabase 数据表设置');
    return;
  }
  if (localSyncOwner && localSyncOwner !== user.id) {
    cards = seedCards.slice();
    projects = seedProjects.slice();
    favorites = ['a1', 'a5', 'a8'];
  }
  if (data?.state) {
    const remote = data.state;
    const localCards = hasLocalSnapshot && (!localSyncOwner || localSyncOwner === user.id) ? cards : [];
    const remoteCards = Array.isArray(remote.cards) ? remote.cards : [];
    const merged = new Map(remoteCards.map((card) => [card.id, card]));
    localCards.forEach((card) => { if (!merged.has(card.id)) merged.set(card.id, card); });
    cards = [...merged.values()];
    projects = [...new Set([...(Array.isArray(remote.projects) ? remote.projects : []), ...(hasLocalSnapshot ? projects : [])])];
    favorites = [...new Set([...(Array.isArray(remote.favorites) ? remote.favorites : []), ...(hasLocalSnapshot ? favorites : [])])];
  }
  localSyncOwner = user.id;
  localStorage.setItem('frame-notes-sync-owner', user.id);
  save();
  render();
  await syncToCloud();
};
const initCloudSync = async () => {
  if (!window.supabase?.createClient) {
    setSyncStatus('云同步加载失败', 'sync-error');
    return;
  }
  cloud = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  const { data, error } = await cloud.auth.getSession();
  if (error) { setSyncStatus('暂未登录'); return; }
  cloud.auth.onAuthStateChange((_event, session) => {
    if (_event === 'INITIAL_SESSION') return;
    if (session?.user) queueMicrotask(() => loadCloudState(session.user));
    else {
      cloudUser = null;
      $('#authButtonText').textContent = '登录以同步';
      setSyncStatus('仅保存在此设备');
    }
  });
  if (data.session?.user) await loadCloudState(data.session.user);
};
const updateCounts = () => {
  $('#allCount').textContent = cards.length;
  $('#footerCount').textContent = cards.length;
  $('#weekCount').textContent = String(Math.min(8, cards.filter((card) => card.fullDate >= '2026-10-20').length)).padStart(2, '0');
  $('#resultCount').textContent = `${visibleCards().length} 条`;
};
const visibleCards = () => {
  const query = searchTerm.trim().toLowerCase();
  return cards.filter((card) => {
    const text = [card.title, card.note, card.project, ...(card.tags || [])].join(' ').toLowerCase();
    return (view !== 'favorites' || favorites.includes(card.id)) &&
      (view !== 'recent' || card.fullDate >= '2026-10-20') &&
      (!filterTag || card.tags.includes(filterTag)) &&
      (!filterProject || card.project === filterProject) &&
      (filterType === 'all' || card.type === filterType) &&
      (!query || text.includes(query));
  }).sort((a, b) => oldestFirst ? a.fullDate.localeCompare(b.fullDate) : b.fullDate.localeCompare(a.fullDate));
};
const renderProjects = () => {
  $('#projectNav').innerHTML = projects.map((project) => `<button class="project-item ${filterProject === project ? 'active' : ''}" data-project="${escapeHtml(project)}"><i class="project-dot"></i>${escapeHtml(project)}<span>${cards.filter((card) => card.project === project).length}</span></button>`).join('');
};
const renderTags = () => {
  const counts = new Map();
  cards.forEach((card) => card.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
  $('#tagCloud').innerHTML = [...counts.keys()].slice(0, 8).map((tag) => `<button class="tag-link" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('');
};
const mediaContent = (card) => {
  if (card.type === 'note') return `<div class="note-paper">${escapeHtml(card.paper || card.note.slice(0, 44)).replace(/\n/g, '<br>')}</div><span class="media-badge">手记</span>`;
  if (card.type === 'technique') return `<div class="technique-sheet"><strong>${escapeHtml(card.technique || '剪辑手法').replace(/\n/g, '<br>')}</strong><p>${escapeHtml(card.note.slice(0, 45))}</p></div><span class="media-badge">剪辑手法</span>`;
  return `<img src="${escapeHtml(card.image || image('photo-1500530855697-b586d89ba3ee'))}" alt="${escapeHtml(card.title)}" loading="lazy"/><span class="media-shade"></span><span class="media-badge">${card.type === 'video' ? '视频' : '影像'}</span>${card.type === 'video' ? `<span class="play-button">▶</span><span class="media-duration">${escapeHtml(card.duration || '00:18')}</span>` : ''}`;
};
const classify = (title, note, source = '') => {
  const text = `${title} ${note} ${source}`.toLowerCase();
  const techniqueTerms = ['剪辑', '转场', '匹配', 'j-cut', 'l-cut', '跳切', '蒙太奇', '速度曲线', '变速', '遮罩', '关键帧', '卡点', '交叉溶解', '音画', '声音先行', '动作接'];
  const imageTerms = ['色彩', '调色', '光影', '构图', '画面', '照片', '摄影', '色温', '景别', '质感'];
  const videoTerms = ['视频', '片段', '镜头', '参考', '纪录片', '电影', 'vlog', '运镜', '拉片'];
  const type = techniqueTerms.some((term) => text.includes(term)) ? 'technique'
    : /youtube\.com|youtu\.be|bilibili\.com|douyin\.com|vimeo\.com|\.mp4/.test(text) || videoTerms.some((term) => text.includes(term)) ? 'video'
      : imageTerms.some((term) => text.includes(term)) ? 'image' : 'note';
  const tagRules = [
    ['转场', ['转场', 'j-cut', 'l-cut', '匹配剪辑', '交叉溶解', '跳切']],
    ['声音设计', ['声音', '音效', '拟音', '配乐', '音乐', '音画']],
    ['节奏', ['节奏', '卡点', '慢一点', '慢节奏', '速度曲线', '变速']],
    ['运镜', ['运镜', '跟拍', '推镜', '摇镜', '手持', '长焦']],
    ['光影', ['光影', '逆光', '阴影', '自然光', '百叶窗']],
    ['色彩', ['色彩', '调色', '色温', '蓝灰', '饱和']],
    ['情绪', ['情绪', '氛围', '孤独', '温柔', '松弛', '回忆']],
    ['自然', ['山', '海', '云', '雨', '风', '森林', '日落']],
    ['特写', ['特写', '微距', '细节']],
    ['旅行', ['旅行', '公路', '车窗', '目的地', '城市散步']],
  ];
  const tags = tagRules.filter(([, terms]) => terms.some((term) => text.includes(term))).map(([tag]) => tag).slice(0, 3);
  if (type === 'technique' && !tags.includes('剪辑技巧')) tags.unshift('剪辑技巧');
  if (!tags.length) tags.push(type === 'video' ? '视频参考' : type === 'image' ? '视觉灵感' : '随手记');
  const project = type === 'technique' ? '剪辑手法' : (projects.find((name) => name !== '未分类' && text.includes(name)) || '未分类');
  return { type, project, tags };
};
const updateAutoClassification = () => {
  const title = $('#titleInput').value.trim();
  const note = $('#noteInput').value.trim();
  const source = $('#sourceInput').value.trim();
  const info = classify(title, note, source);
  const label = { technique: '剪辑手法', video: '视频参考', image: '影像灵感', note: '随手记' }[info.type];
  $('#autoChip').textContent = title || note || source ? `${label} · ${info.tags.slice(0, 2).join(' / ')}` : '等待输入';
  return info;
};
const renderCards = () => {
  const items = visibleCards();
  cardGrid.classList.toggle('list-layout', layout === 'list');
  cardGrid.innerHTML = items.map((card) => `<article class="inspiration-card ${card.type === 'note' ? 'note-card' : ''} ${card.type === 'technique' ? 'technique-card' : ''}" data-card="${escapeHtml(card.id)}" tabindex="0">
    <button class="favorite-button ${favorites.includes(card.id) ? 'active' : ''}" data-favorite="${escapeHtml(card.id)}" aria-label="${favorites.includes(card.id) ? '取消收藏' : '收藏'}">${favorites.includes(card.id) ? '♥' : '♡'}</button>
    <button class="delete-card-button" data-delete-card="${escapeHtml(card.id)}" aria-label="删除这条灵感" title="删除这条灵感">⌫</button>
    <div class="card-media">${mediaContent(card)}</div>
    <div class="card-content"><div class="card-heading"><span class="card-type">${typeNames[card.type]}</span><span class="card-date">${escapeHtml(card.date)}</span></div><h3 class="card-title">${escapeHtml(card.title)}</h3><p class="card-note">${escapeHtml(card.note)}</p><div class="card-meta"><div class="card-tags">${card.tags.slice(0, 3).map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`).join('')}</div></div></div>
  </article>`).join('');
  $('#emptyState').hidden = items.length > 0;
  cardGrid.hidden = items.length === 0;
  updateCounts();
  renderActiveFilters();
};
const renderActiveFilters = () => {
  const parts = [];
  if (filterProject) parts.push(['项目', filterProject, 'project']);
  if (filterTag) parts.push(['标签', filterTag, 'tag']);
  if (searchTerm) parts.push(['搜索', searchTerm, 'search']);
  $('#activeFilters').innerHTML = parts.map(([label, value, key]) => `<span class="active-filter">${label} · ${escapeHtml(value)} <button data-clear="${key}" aria-label="移除筛选">×</button></span>`).join('');
};
const render = () => { renderProjects(); renderTags(); renderCards(); };
let draftRelatedIds = [];
let modalTrigger = null;
const openModal = (draft = {}) => {
  modalTrigger = document.activeElement;
  $('#cardForm').reset();
  $('#titleInput').value = draft.title || '';
  $('#noteInput').value = draft.note || '';
  draftRelatedIds = draft.relatedIds || [];
  updateAutoClassification();
  $('#modalBackdrop').classList.add('open');
  document.body.classList.add('modal-open');
  (draft.title ? $('#noteInput') : $('#titleInput')).focus();
};
const closeModal = () => {
  if (!$('#modalBackdrop').classList.contains('open')) return;
  $('#modalBackdrop').classList.remove('open');
  document.body.classList.remove('modal-open');
  $('#cardForm').reset();
  $('#autoChip').textContent = '等待输入';
  draftRelatedIds = [];
  modalTrigger?.focus();
};

const flowerPrompts = [
  { title: '声音牵着画面走', note: '用一个声音，连接两个完全不同的地方。' },
  { title: '藏起主角的脸', note: '不拍脸，只用手、脚和影子介绍一个人。' },
  { title: '普通物件的主角时刻', note: '把桌边的一件小东西，拍成电影里的主角。' },
  { title: '一个颜色的旅程', note: '找三处相同的颜色，把它们剪成一段旅程。' },
  { title: '让观众等一拍', note: '在音乐最满的地方突然静音，留一个空镜。' },
  { title: '从结尾开始', note: '把最后一个镜头放在开头，故事会怎么变？' },
  { title: '窗外的三种景别', note: '拍同一扇窗，用远景、中景和特写讲一个故事。' },
  { title: '雨天的另一面', note: '只拍倒影，记录一场没有天空的雨。' },
  { title: '动作接力', note: '用一个转身，把白天的街道接到夜晚。' },
  { title: '不露脸的告别', note: '用三个镜头表达告别，不出现人物和文字。' },
  { title: '先听见再看见', note: '让下一场的环境声提前进来，再切画面。' },
  { title: '把节奏慢下来', note: '把最想快切的一段放慢，观察情绪的变化。' },
];
const diceCounts = ['3 个镜头', '5 个镜头', '15 秒短片', '一个固定机位'];
const diceTechniques = ['动作匹配', 'J-cut 声音先行', '跳切', '平行剪辑', '留白', '速度变化'];
const diceMoods = ['惊喜', '松弛', '悬念', '孤独', '温暖'];
let flowerIndex = 0;
let diceText = '3 个镜头 × 动作匹配 × 惊喜';
let chestIds = [];
const pick = (items) => items[Math.floor(Math.random() * items.length)];
const animateResult = (selector) => {
  const element = $(selector);
  element.classList.remove('changing');
  void element.offsetWidth;
  element.classList.add('changing');
};
const pickFlower = () => {
  flowerIndex = (flowerIndex + 1 + Math.floor(Math.random() * (flowerPrompts.length - 1))) % flowerPrompts.length;
  $('#flowerResult').textContent = flowerPrompts[flowerIndex].note;
  animateResult('#flowerResult');
};
const rollDice = () => {
  const options = diceCounts.flatMap((count) => diceTechniques.flatMap((technique) => diceMoods.map((mood) => `${count} × ${technique} × ${mood}`)));
  diceText = pick(options.filter((option) => option !== diceText));
  $('#diceResult').textContent = diceText;
  animateResult('#diceResult');
};
const openChest = () => {
  if (cards.length < 2) {
    chestIds = [];
    $('#chestResult').textContent = '收集至少 2 张卡片，就能组合灵感。';
    $('#chestUse').disabled = true;
    return;
  }
  const first = pick(cards);
  const second = pick(cards.filter((card) => card.id !== first.id));
  chestIds = [first.id, second.id];
  $('#chestResult').innerHTML = [first, second].map((card, index) => `<button type="button" class="chest-card" data-card="${escapeHtml(card.id)}">${index ? '＋ ' : ''}${escapeHtml(card.title)}</button>`).join('');
  $('#chestUse').disabled = false;
  animateResult('#chestResult');
};
['pickFlower', 'flowerShuffle'].forEach((id) => $(`#${id}`).addEventListener('click', pickFlower));
['rollDice', 'diceShuffle'].forEach((id) => $(`#${id}`).addEventListener('click', rollDice));
['openChest', 'chestShuffle'].forEach((id) => $(`#${id}`).addEventListener('click', openChest));
$('#flowerUse').addEventListener('click', () => openModal(flowerPrompts[flowerIndex]));
$('#diceUse').addEventListener('click', () => openModal({ title: `剪辑练习：${diceText}`, note: `练习限制：${diceText}\n\n我的思路：` }));
$('#chestUse').addEventListener('click', () => {
  const pair = chestIds.map((id) => cards.find((card) => card.id === id)).filter(Boolean);
  if (pair.length < 2) { openChest(); return; }
  openModal({ title: '两张卡片的新组合', note: `参考一：${pair[0].title}\n${pair[0].note}\n\n参考二：${pair[1].title}\n${pair[1].note}\n\n新的组合思路：`, relatedIds: chestIds.slice() });
});
const setGardenCollapsed = (collapsed) => {
  $('#inspirationGarden').hidden = collapsed;
  $('#gardenToggle').textContent = collapsed ? '展开花园 ▾' : '收起花园 ▴';
  $('#gardenToggle').setAttribute('aria-expanded', String(!collapsed));
};
setGardenCollapsed(read('frame-notes-garden-collapsed', false));
$('#gardenToggle').addEventListener('click', () => {
  const collapsed = !$('#inspirationGarden').hidden;
  setGardenCollapsed(collapsed);
  localStorage.setItem('frame-notes-garden-collapsed', JSON.stringify(collapsed));
});
const showToast = (message) => {
  $('#toast').querySelector('b').textContent = message;
  $('#toast').classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => $('#toast').classList.remove('show'), 2100);
};
const closeDetail = () => { $('#detailPanel').classList.remove('open'); $('#overlay').classList.remove('show'); selectedId = null; };
const openDetail = (id) => {
  const card = cards.find((item) => item.id === id);
  if (!card) return;
  selectedId = id;
  const detailMedia = card.type === 'note' ? `<div class="note-paper">${escapeHtml(card.paper || '').replace(/\n/g, '<br>')}</div>` : card.type === 'technique' ? `<div class="technique-sheet"><strong>${escapeHtml(card.technique || '剪辑手法').replace(/\n/g, '<br>')}</strong><p>${escapeHtml(card.note)}</p></div>` : `<img src="${escapeHtml(card.image || '')}" alt="${escapeHtml(card.title)}"/>`;
  $('#detailPanel').innerHTML = `<div class="detail-head"><div><div class="detail-kicker">${typeNames[card.type]}</div><h2>${escapeHtml(card.title)}</h2></div><button class="icon-button detail-close" id="detailClose" aria-label="关闭">×</button></div><div class="detail-body"><div class="detail-media ${card.type === 'note' ? 'note-card' : ''} ${card.type === 'technique' ? 'technique-card' : ''}">${detailMedia}</div><div class="detail-label">这条灵感</div><p class="detail-note">${escapeHtml(card.note || '还没有补充说明。')}</p><div class="detail-label">相关标签</div><div class="detail-tags">${(card.tags || []).map((tag) => `<span class="detail-tag"># ${escapeHtml(tag)}</span>`).join('') || '<span class="detail-tag">尚无标签</span>'}</div><div class="detail-source"><span>所属项目 · ${escapeHtml(card.project)}</span>${card.source ? `<a href="${escapeHtml(card.source)}" target="_blank" rel="noreferrer">打开来源 ↗</a>` : '<span>未添加来源</span>'}</div><div class="detail-footer"><span>收录于 ${escapeHtml(card.fullDate || card.date)}</span><button id="deleteCard">删除这条灵感</button></div></div>`;
  $('#detailPanel').classList.add('open');
  $('#overlay').classList.add('show');
};

document.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('[data-delete-card]');
  if (deleteButton) {
    event.stopPropagation();
    const id = deleteButton.dataset.deleteCard;
    const card = cards.find((item) => item.id === id);
    if (!card || !window.confirm(`确定删除「${card.title}」吗？`)) return;
    cards = cards.filter((item) => item.id !== id);
    favorites = favorites.filter((favorite) => favorite !== id);
    if (chestIds.includes(id)) chestIds = chestIds.filter((relatedId) => relatedId !== id);
    save(); render(); showToast('已删除这条灵感');
    return;
  }
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) {
    event.stopPropagation();
    const id = favoriteButton.dataset.favorite;
    favorites = favorites.includes(id) ? favorites.filter((favorite) => favorite !== id) : [...favorites, id];
    save(); renderCards();
    return;
  }
  const card = event.target.closest('[data-card]');
  if (card) { openDetail(card.dataset.card); return; }
  const project = event.target.closest('[data-project]');
  if (project) { filterProject = filterProject === project.dataset.project ? '' : project.dataset.project; filterTag = ''; render(); return; }
  const tag = event.target.closest('[data-tag]');
  if (tag) { filterTag = filterTag === tag.dataset.tag ? '' : tag.dataset.tag; filterProject = ''; render(); return; }
  const clear = event.target.closest('[data-clear]');
  if (clear) {
    if (clear.dataset.clear === 'project') filterProject = '';
    if (clear.dataset.clear === 'tag') filterTag = '';
    if (clear.dataset.clear === 'search') { searchTerm = ''; $('#searchInput').value = ''; }
    renderCards();
  }
});
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('#searchInput').focus(); }
  if (event.key === 'Escape') { closeModal(); closeDetail(); $('#sidebar').classList.remove('open'); }
  if (event.key === 'Enter' && event.target.matches('[data-card]')) openDetail(event.target.dataset.card);
});
$('#newCard').addEventListener('click', () => openModal());
$('#emptyNew').addEventListener('click', () => openModal());
$('#closeModal').addEventListener('click', closeModal);
$('#cancelModal').addEventListener('click', closeModal);
$('#modalBackdrop').addEventListener('click', (event) => { if (event.target === $('#modalBackdrop')) closeModal(); });
$('#cardForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = $('#titleInput').value.trim();
  if (!title) return;
  const saveButton = $('.save-button');
  saveButton.disabled = true;
  let cover = '';
  try {
    cover = await readCoverImage($('#coverInput').files[0]);
  } catch (error) {
    showToast(error.message || '封面图片读取失败');
    saveButton.disabled = false;
    return;
  }
  const now = new Date();
  const note = $('#noteInput').value.trim() || '留给未来的自己，一条还没展开的灵感。';
  const source = $('#sourceInput').value.trim();
  const auto = classify(title, note, source);
  const type = auto.type;
  const card = {
    id: `n${Date.now()}`, type, title, note, tags: auto.tags, project: auto.project, date: `${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`,
    fullDate: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`, source,
    relatedIds: draftRelatedIds.slice(),
    ...(type === 'note' ? { paper: title } : type === 'technique' ? { technique: `${auto.tags[0] || 'EDITING NOTE'}\n剪辑手法` } : { image: cover || image(type === 'video' ? 'photo-1493246507139-91e8fad9978e' : 'photo-1470252649378-9c29740c9fa8'), duration: '00:18' })
  };
  cards.unshift(card); save(); view = 'all'; filterType = 'all'; filterTag = ''; filterProject = ''; $('#searchInput').value = ''; searchTerm = '';
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === 'all'));
  document.querySelectorAll('.filter-pill').forEach((button) => button.classList.toggle('selected', button.dataset.type === 'all'));
  $('#currentView').textContent = '全部灵感';
  closeModal(); saveButton.disabled = false; render(); showToast(cover ? '封面和灵感已收好' : '灵感已收好');
});
$('#searchInput').addEventListener('input', (event) => { searchTerm = event.target.value; renderCards(); });
['titleInput', 'noteInput', 'sourceInput'].forEach((id) => $(`#${id}`).addEventListener('input', updateAutoClassification));
$('#typeFilters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-type]');
  if (!button) return;
  filterType = button.dataset.type;
  document.querySelectorAll('.filter-pill').forEach((item) => item.classList.toggle('selected', item === button));
  renderCards();
});
document.querySelectorAll('.nav-item').forEach((button) => button.addEventListener('click', () => {
  view = button.dataset.view; filterProject = ''; filterTag = '';
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item === button));
  $('#currentView').textContent = { all: '全部灵感', favorites: '我的收藏', recent: '最近记录' }[view];
  render(); $('#sidebar').classList.remove('open');
}));
document.querySelectorAll('.view-btn').forEach((button) => button.addEventListener('click', () => {
  layout = button.dataset.layout;
  document.querySelectorAll('.view-btn').forEach((item) => item.classList.toggle('selected', item === button));
  renderCards();
}));
$('#sortButton').addEventListener('click', () => {
  oldestFirst = !oldestFirst;
  $('#sortButton').innerHTML = `${oldestFirst ? '↑' : '↓'} ${oldestFirst ? '最早添加' : '最近添加'}`;
  renderCards();
});
$('#addProject').addEventListener('click', () => {
  const project = window.prompt('给新项目起个名字');
  if (!project || !project.trim()) return;
  const name = project.trim();
  if (!projects.includes(name)) { projects.splice(Math.max(0, projects.length - 1), 0, name); save(); renderProjects(); }
});
$('#overlay').addEventListener('click', closeDetail);
$('#detailPanel').addEventListener('click', (event) => {
  if (event.target.closest('#detailClose')) closeDetail();
  if (event.target.closest('#deleteCard') && selectedId) {
    if (chestIds.includes(selectedId)) {
      chestIds = [];
      $('#chestResult').textContent = '抽两张旧卡片，试着组合新想法。';
      $('#chestUse').disabled = true;
    }
    cards = cards.filter((card) => card.id !== selectedId); favorites = favorites.filter((id) => id !== selectedId); save(); closeDetail(); render(); showToast('已删除这条灵感');
  }
});
$('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
document.addEventListener('click', (event) => {
  if (window.innerWidth <= 820 && $('#sidebar').classList.contains('open') && !event.target.closest('#sidebar') && !event.target.closest('#mobileMenu')) $('#sidebar').classList.remove('open');
});
render();
$('#authButton').addEventListener('click', async () => {
  if (cloudUser) {
    if (!window.confirm('退出后，这台设备将不再同步。确定退出吗？')) return;
    const { error } = await cloud.auth.signOut();
    if (error) showToast('退出失败，请稍后再试');
    return;
  }
  $('#authBackdrop').classList.add('open');
  $('#authEmail').focus();
});
const closeAuth = () => {
  $('#authBackdrop').classList.remove('open');
  $('#authPassword').value = '';
};
$('#closeAuth').addEventListener('click', closeAuth);
$('#authBackdrop').addEventListener('click', (event) => { if (event.target === $('#authBackdrop')) closeAuth(); });
const authenticate = async (createAccount) => {
  const email = $('#authEmail').value.trim();
  const password = $('#authPassword').value;
  if (!email || password.length < 8) { showToast('请输入邮箱和至少 8 位密码'); return; }
  const buttons = [$('#signUpButton'), $('#signInButton')];
  buttons.forEach((button) => { button.disabled = true; });
  const result = createAccount
    ? await cloud.auth.signUp({ email, password, options: { emailRedirectTo: window.location.href } })
    : await cloud.auth.signInWithPassword({ email, password });
  buttons.forEach((button) => { button.disabled = false; });
  if (result.error) { showToast(createAccount ? '创建失败，请检查邮箱或密码' : '登录失败，请检查邮箱和密码'); return; }
  closeAuth();
  if (createAccount && !result.data.session) showToast('账号已创建，请查收邮箱并完成验证');
  else showToast(createAccount ? '账号已创建，正在同步' : '登录成功，正在同步');
};
$('#signUpButton').addEventListener('click', () => authenticate(true));
$('#signInButton').addEventListener('click', () => authenticate(false));
initCloudSync();
