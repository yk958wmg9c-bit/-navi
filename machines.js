// デモ用の架空機種。実機の情報ではありません。
// 実機データを追加する際は公式資料を確認し、出典・確認日を記載してください。
const MACHINES = [
 {id:"real-01",name:"Pフィーバー機動戦士ガンダムユニコーン",maker:"SANKYO",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-02",name:"Pフィーバー機動戦士ガンダムユニコーン2",maker:"SANKYO",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-03",name:"Pフィーバー炎炎ノ消防隊",maker:"SANKYO",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-04",name:"Pフィーバーからくりサーカス",maker:"SANKYO",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-05",name:"P新世紀エヴァンゲリオン〜未来への咆哮〜",maker:"ビスティ",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-06",name:"Pシン・エヴァンゲリオン Type レイ",maker:"ビスティ",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-07",name:"P大海物語5",maker:"三洋物産",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-08",name:"Pスーパー海物語 IN 沖縄5",maker:"三洋物産",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-09",name:"P Re:ゼロから始める異世界生活 鬼がかりver.",maker:"大都技研",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:"real-10",name:"e Re:ゼロから始める異世界生活 season2",maker:"大都技研",type:'未確認',jackpot:'要確認',rush:'要確認',continuation:'要確認',balls:'要確認',payout:null,note:'実在するシリーズ・機種名の掲載候補です。型式やスペックは公式一次資料との照合前のため未掲載です。数値を確認してから更新してください。',source:'未登録',verified:false},
 {id:'demo-01',name:'P ブルースター 319',maker:'サンプルメーカーA',type:'ミドル',jackpot:'1/319.7',rush:'約60%',continuation:'約81%',balls:'約1500個（例）',payout:3.5,note:'架空のミドルタイプです。期待払い出し玉数は計算デモ用の仮定値であり、実機の性能を示しません。'},
 {id:'demo-02',name:'P ライトウェーブ 199',maker:'サンプルメーカーB',type:'ライトミドル',jackpot:'1/199.8',rush:'約55%',continuation:'約75%',balls:'約1000個（例）',payout:3.1,note:'架空のライトミドルタイプです。掲載スペックはすべて説明用のサンプルです。'},
 {id:'demo-03',name:'PA スカイフラワー 99',maker:'サンプルメーカーC',type:'甘デジ',jackpot:'1/99.9',rush:'約50%',continuation:'約68%',balls:'約500個（例）',payout:3.8,note:'架空の甘デジタイプです。計算用期待払い出し玉数は仮の入力例です。'},
 {id:'demo-04',name:'P オーシャンフラッシュ 319',maker:'サンプルメーカーD',type:'ミドル',jackpot:'1/319.6',rush:'約65%',continuation:'約80%',balls:'約1500個（例）',payout:3.3,note:'架空の機種です。機種情報を追加する際のテンプレートとして利用してください。'}
];
