import lilyImg from '../assets/images/two_white_lilies_1791642494592.jpg';

export interface ScenarioItem {
  number: string;
  styleName: string;
  tagEn: string;
  quote: string;
}

export interface KDocItem {
  number: string;
  titleCn: string;
  titleEn: string;
  url: string;
}

export interface NoticeItem {
  title: string;
  items: string[];
}

export interface ReviewItem {
  id: string;
  clientName: string;
  date: string;
  tag: string;
  content: string;
  reply?: string;
  likes: number;
}

export interface ScriptItem {
  id: string;
  category: string;
  title: string;
  quote: string;
  tone: string;
}

export const ORIGINAL_PROFILE_DATA = {
  siteTitle: '昼/万埃',
  siteSubtitle: '昼/万埃',
  welcomeGreeting: 'She give me a quick glance, like the tip of a sword.',
  welcomeIntro: '26 LeT 土象金牛 ISTJ/INFJ 中御。',
  avatarUrl: lilyImg,
  bannerUrl: lilyImg,
  infoImageUrl: lilyImg,
  nickname: '昼/万埃',
  handle: '@wan_ai',
  badgeTitle: 'VERIFIED',
  contactUid: '8829-4102-991',
  contactWeChatOrQQ: 'sky_hen_07',
  contactNote: '请备注预约',
  
  styleTags: ['雾山影最高F级', '信纸V级', '黑羊最高D级'],
  welcomeFooterQuote: '所有的故事，假如称其为故事，都是从第二次见面开始的。',
  ipLocation: '雾山影 信纸 黑羊',
  ipSub: '呼吸停止前',

  skyStats: {
    server: 'ios',
    wings: '您抬爱。',
    height: '您抬爱。',
    usualOutfits: '0.2/1号 二级蓝/白 桂冠/枯角 鸟/枭',
    onlineTime: '工作日20:00-1:00 周末睡醒全',
    favoriteMaps: ['暮土荒原', '千鸟城星空', '暴风眼落石区', '雨林深处'],
  },

  orderTerms: {
    availableTime: '可取单时间：工作日20:00-1:00 周末睡醒全.',
    guarantee: '*稳定无暖味无心选无特殊关系 入圈无瓜 无纠纷',
    pricingTitle: '* 自带价：（黑羊跟团）',
    rates: [
      '虚病50r/h 28r/半 指定费、凌晨价、头牌费按团',
      '单口 96r/h 半单口 66r/h（出现态度让我不适的话少回应，按照单口补费）',
      '特殊要求需额外加价 比如高擦+10 当然我比较随心，除了固定价格和凌晨价之外，别的额外加价我看心情和看人可免or减',
      '*1h单分两次取需补加价',
    ],
  },

  step2Quote: ['我其实没有选择的余地，遇见你的那一刻', '命运就掉下来了，一秒钟也不容我选择'],

  scenarios: [
    {
      number: '01',
      styleName: '疯狗僭越',
      tagEn: 'OVERSTEP & DOMINANCE',
      quote: '这种程度就让您觉得被冒犯了吗，主人？',
    },
    {
      number: '02',
      styleName: '媚骨勾引',
      tagEn: 'SEDUCTION & TEASE',
      quote: '眼泪不小心打湿了衣服，想要挡住却弄巧成拙，不小心将衣领又扯开了些…',
    },
    {
      number: '03',
      styleName: '暧昧缱绻',
      tagEn: 'INTIMACY & AMBIGUITY',
      quote: '吃独食可不是什么好习惯，劳烦您张张口啊？',
    },
    {
      number: '04',
      styleName: '轻浮牛郎',
      tagEn: 'FLIRTATION & ROMANEE',
      quote: '您还是别打趣我了。真的很喜欢我吗？那就为我开一瓶罗曼尼康帝吧',
    },
    {
      number: '05',
      styleName: '阴湿艳鬼',
      tagEn: 'OBSESSION & ENTWINED',
      quote: '从背后环住你的感觉真好啊，你该被我的痴缠扰一辈子的',
    },
  ] as ScenarioItem[],

  categories: [
    {
      number: '01',
      titleCn: '风格须知',
      titleEn: 'RULES & STYLE',
      url: 'https://www.kdocs.cn/l/ciKOsyJa6UyG',
      key: 'rules',
    },
    {
      number: '02',
      titleCn: '见字如晤',
      titleEn: 'SCRIPTS & LETTERS',
      url: 'https://www.kdocs.cn/l/cvP25OUQ6eOz',
      key: 'letters',
    },
    {
      number: '03',
      titleCn: '板评纯享',
      titleEn: 'BOARD REVIEWS',
      url: 'https://www.kdocs.cn/l/csxumq4FjYuK',
      key: 'board',
    },
    {
      number: '04',
      titleCn: '陪评一览',
      titleEn: 'COMPANION ARCHIVE',
      url: 'https://www.kdocs.cn/l/cc9SN8zSTDz2',
      key: 'companion',
    },
    {
      number: '05',
      titleCn: '卡类相关',
      titleEn: 'CARDS & ARCHIVE',
      url: 'https://www.kdocs.cn/l/cczrHBUEDg4j',
      key: 'cards',
    },
  ],

  step4Quote: ['我试着克制过了：'],

  notices: [
    {
      title: '预约与相处守则',
      items: [
        '请提前至少半天告知预约时段，方便留出完整时间专注于你。',
        '临时若有变动，提前1小时告知可友好改期，相互尊重时间成本。',
        '单次可先体验，满意后再商议是否续约或长期包周/包月。',
      ],
    },
    {
      title: '界限与隐私规范',
      items: [
        '恪守职业操守，不探听、不索要三次元现实个人隐私（真名、住址、工作等）。',
        '仅限于游戏内虚拟陪伴与文字/语音三恋氛围，杜绝低俗违法与金钱借贷。',
        '风格可根据偏好微调节奏，任何不适随时暂停叫停。',
      ],
    },
    {
      title: '跑图与设备建议',
      items: [
        '如需带跑，建议提前点亮牵手/背背，挂机时请确保设备电量充足。',
        '支持官服全端互通，若遇串线第一时间在后台同步位置。',
      ],
    },
  ] as NoticeItem[],

  boardReviews: [
    {
      id: 'br-1',
      clientName: 'Anonymous_01',
      date: '2026-03-28',
      tag: '张力拉满',
      content:
        '被狠狠拿捏住了……说话语气又痞又慢，但跑图又特别稳。逻辑分析直接戳中我心底最纠结的事，那种亦正亦邪的反差感绝了，体验感满分。',
      reply: '痕回复：算你识货，下次别再自己一个人瞎琢磨了。',
      likes: 54,
    },
    {
      id: 'br-2',
      clientName: 'Ghost_Valley',
      date: '2026-03-24',
      tag: '车技与拉扯',
      content:
        '暮土直飞帅到没朋友，而且对话完全不落俗套。不油腻，没有公式化的甜言蜜语，每句话都在挑拨神经，后劲极大。',
      reply: '痕回复：跟紧我，掉队了可不捞你。',
      likes: 38,
    },
    {
      id: 'br-3',
      clientName: 'K_Nocturne',
      date: '2026-03-15',
      tag: '长期复购',
      content:
        '续了整整两周。ENTP的思维真的太性感了，清醒沉着，又带着一股谁也驯服不了的疯劲。很奇妙的安全感。',
      reply: '痕回复：承蒙厚爱，迷局已开，概不退票。',
      likes: 82,
    },
  ] as ReviewItem[],

  companionReviews: [
    {
      id: 'cr-1',
      clientName: '星海信徒 (长期包月)',
      date: '2026-03-30',
      tag: '深度结契',
      content:
        '和痕结契一个月。他不是那种只会说多喝热水的人，他的每一句话都像经过精密手术刀剖析过一样，精准刺穿你所有的不安。那种‘只对你露出犬牙和柔软腹部’的反差，杀伤力无人能挡。',
      reply: '痕：有些领地一旦圈进来了，就别妄想再走出去。',
      likes: 96,
    },
    {
      id: 'cr-2',
      clientName: 'Black_Cat',
      date: '2026-03-21',
      tag: '高级分寸',
      content:
        '最难得的是他的尺度感。哪怕话语再具有侵略性，但只要你表现出一丝不适，他会瞬间敛起所有锋芒，只剩克制的保护。高级的性冷淡与热烈并存。',
      reply: '痕：分寸是给你的特权。',
      likes: 67,
    },
    {
      id: 'cr-3',
      clientName: 'Echo_Valley',
      date: '2026-03-11',
      tag: '极具吸引力',
      content:
        '19岁金牛ENTP的含金量还在上升……思维敏捷、嘴毒心软、执行力强到离谱。在他面前你可以卸下所有伪装，完全不需要讨好任何人。',
      reply: '痕：做你自己就好，其他交给我收拾。',
      likes: 89,
    },
  ] as ReviewItem[],

  scripts: [
    {
      id: 'sc-1',
      category: '日常问候',
      title: '晨昏苏醒',
      quote: '醒了就吱声。别装看不见，我可没那么多耐心等别人，但你除外。',
      tone: '低缓微哑 · 漫不经心',
    },
    {
      id: 'sc-2',
      category: '跑图护航',
      title: '僭越掌控',
      quote: '手放上来抓紧了。红光扫过来也别怕，天塌下来有我顶着，你只要看着我。',
      tone: '霸道笃定 · 掌控全场',
    },
    {
      id: 'sc-3',
      category: '治愈安慰',
      title: '逻辑解构',
      quote: '哭完了吗？哭完听我说：这件事蠢在别人，不在你。收起你那没必要的自责，有我在，谁也别想挑你的刺。',
      tone: '冷冽笃定 · 偏袒护短',
    },
    {
      id: 'sc-4',
      category: '树屋夜聊',
      title: '诱哄入局',
      quote: '这么晚还不睡，是在等我给你讲故事，还是故意想多听听我的声音？过来，闭上眼。',
      tone: '轻慢缱绻 · 蛊惑入骨',
    },
  ] as ScriptItem[],
};
