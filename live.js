var bcd140526_show_thumbnail = true;/*bcd140526_show_thumbnail*/
var bcd140526_show_label = false;/*bcd140526_show_label*/
var bcd140526_show_comment_numbers = true;/*bcd140526_show_comment_numbers*/
var bcd140526_show_date = true;/*bcd140526_show_date*/
var bcd140526_show_author_name = false;/*bcd140526_show_author_name*/
var bcd140526_show_readmore = false;/*bcd140526_show_readmore*/
var bcd140526_show_snippet = false;/*bcd140526_show_snippet*/
var bcd140526_hide_copyright = false;/*bcd140526_hide_copyright*/
var bcd140526_snippet_length = 0;/*bcd140526_snippet_length*/
var bcd140526_post_count = 100;/*bcd140526_post_count*/
var bcd140526_thumbnail_size = 100;// v1.5, only effect with list style/*bcd140526_thumbnail_size*/
var bcd140526_sort_by = 'latest'; // latest or random/*bcd140526_sort_by*/
var bcd140526_index_label = 'Live!';/*bcd140526_index_label*/
var bcd140526_design_style = 'list';// list or column/*bcd140526_design_style*/
var bcd140526_date_format = 'dd/mm/yyyy';/*bcd140526_date_format*/
var lang_readmore = '';/*lang_readmore*/
var HOST = 'https://www.rajax.com.br/';/*HOST*/

_s7IgU = ['<script type="text/javascript" src="','"><\/script>','-','dd','mm','yyyy','','\u003cimg ','src\u003d\"','\"','','data-thumbnail-src\u003d\"','\"','','\u003ciframe ','src\u003d\"','\"','http://www.youtube.com/watch?v=','','http://www.youtube.com/embed/','','?rel=0','','http://img.youtube.com/vi/','/mqdefault.jpg','blog-','.comments','','category','','title','','subtitle','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','entry','post-','','published','category','','title','','content','','summary','','','','','comments','link','alternate','replies','Anonymous','','http://img1.blogblog.com/img/anon36.png','name','uri','gd$image','http://img1.blogblog.com/img/blank.gif','','media$thumbnail','thr$total',' ','','','','','thr$in-reply-to','thr$in-reply-to','thr$in-reply-to','/default/','/summary/','?alt=json-in-script','','gd$extendedProperty','blogger.itemClass','pid-','','undefined','undefined','script','src','http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js','type','text/javascript','head','link[href*="font-awesome.css"]','link','href','http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css','rel','stylesheet','head','<div style="clear:both!important;float:none;!important;line-height:0!important"></div>','','<div class="bcd140526_post_feed ',' ','no-thumb','"><ul>','<li class="item item-','">','column','/s72-c/','/s72-c/','/s1600/','youtube.com','/default.','/default.','/mqdefault.','/s72-c/','/s72-c/','/s','-c/','youtube.com','/default.','/default.','/mqdefault.','<a target="_top" class="thumbnail" style="width:','px;height:','px;" href="','"><img src="','"/></a>','<div class="item-body">','undefined','<a target="_top" class="cate" href="','/search/label/','">','</a>','<h3 class="title"><a target="_top" href="','">','</a></h3>','<div class="meta">','<span class="meta-item author-name"><i class="fa fa-user"></i> ','</span>','<span class="meta-item comment-number"><i class="fa fa-comment"></i> ','</span>','<span class="meta-item date-time"><i class="fa fa-clock-o"></i> ','</span>','</div>','...',' <a target="_top" href="','#more">','</a>','<p class="snippet">','</p>','</div>','</li>','</ul>','<a target="_top" class="copyright" href="http://www.sneeit.com/2014/05/blogger-random-recent-specific-label-posts-widget-all-in-one-post-feed-widget" style="font-size: 11px!important;text-align:right;visibility: visible;!important;text-indent:0!important;height:auto!important;width:100%!important;position:static!important;color:#999!important;display:block!important;opacity:1!important;"></a>','</div>','<p><em>Have no posts</em></p>','random','/feeds/posts/default','/-/','?alt=json-in-script&max-result=','&start-index=','&callback=_fYbP','/feeds/posts/default','/-/','?alt=json-in-script','random','&max-results=0','&max-results=','&callback=_fHfQ'];function _fIoT(url){document.write(_s7IgU[0]+url+_s7IgU[1]);}function _fAuD(pub_date,format){pub_date=pub_date.split(_s7IgU[2]);date=new Date(pub_date[0],pub_date[1]-1,pub_date[2].substring(0,2));dd=date.getDate();mm=date.getMonth()+1;yyyy=date.getFullYear();format=format.replace(_s7IgU[3],dd);format=format.replace(_s7IgU[4],mm);format=format.replace(_s7IgU[5],yyyy);return format;}function _fCdP(content){var _vOmB=_s7IgU[6];var _vAcZ=_s7IgU[7];var _vOwP=_s7IgU[8];var _vGwA=_s7IgU[9];index0=content.indexOf(_vAcZ);if(index0!=-1){index1=content.indexOf(_vOwP,index0);if(index0!=-1){index2=content.indexOf(_vGwA,index1+_vOwP.length);if(index0!=-1){_vOmB=content.substring(index1+_vOwP.length,index2);}}}if(_vOmB==_s7IgU[10]){_vAcZ=_s7IgU[11];_vOwP=_s7IgU[12];index0=content.indexOf(_vAcZ);if(index0!=-1){index1=content.indexOf(_vOwP,index0+_vAcZ.length);if(index0!=-1){_vOmB=content.substring(index0+_vAcZ.length,index1);}}}if(_vOmB==_s7IgU[13]){_vAcZ=_s7IgU[14];_vOwP=_s7IgU[15];_vGwA=_s7IgU[16];index0=content.indexOf(_vAcZ);if(index0!=-1){index1=content.indexOf(_vOwP,index0);if(index0!=-1){index2=content.indexOf(_vGwA,index1+_vOwP.length);if(index0!=-1){_vOmB=content.substring(index1+_vOwP.length,index2);_vOmB=_vOmB.replace(_s7IgU[17],_s7IgU[18]);_vOmB=_vOmB.replace(_s7IgU[19],_s7IgU[20]);_vOmB=_vOmB.replace(_s7IgU[21],_s7IgU[22]);_vOmB=_s7IgU[23]+_vOmB+_s7IgU[24];}}}}return _vOmB;}function _fHzF(json){var _vPuB=new Object();var _vUkF=/<\S[^>]*>/g;_vPuB.id=json.feed.id.$t;key=_s7IgU[25];index=_vPuB.id.indexOf(key);_vPuB.id=_vPuB.id.substring(index+key.length);_vPuB.id=_vPuB.id.replace(_s7IgU[26],_s7IgU[27]);_vPuB.cate=new Array();if(_s7IgU[28] in json.feed){for(_vSwE=0;_vSwE<json.feed.category.length;_vSwE++){_vPuB.cate[_vSwE]=json.feed.category[_vSwE].term;}}_vPuB.title=_s7IgU[29];if(_s7IgU[30] in json.feed){_vPuB.title=json.feed.title.$t;}_vPuB.subtitle=_s7IgU[31];if(_s7IgU[32] in json.feed){_vPuB.subtitle=json.feed.subtitle.$t;}_vPuB.admin=new Object();_vPuB.admin.name=_s7IgU[33];_vPuB.admin.uri=_s7IgU[34];_vPuB.admin.avatar=_s7IgU[35];if(_s7IgU[36] in json.feed.author[0]){_vPuB.admin.name=json.feed.author[0].name.$t;}if(_s7IgU[37] in json.feed.author[0]){_vPuB.admin.uri=json.feed.author[0].uri.$t;}if(_s7IgU[38] in json.feed.author[0]){if(json.feed.author[0].gd$image.src!=_s7IgU[39]){_vPuB.admin.avatar=json.feed.author[0].gd$image.src;}}_vPuB.total_entry=Number(json.feed.openSearch$totalResults.$t);_vPuB.start_index=Number(json.feed.openSearch$startIndex.$t);_vPuB.item_per_page=Number(json.feed.openSearch$itemsPerPage.$t);_vPuB.entry_number=0;if(_s7IgU[40] in json.feed){_vPuB.entry_number=json.feed.entry.length;}_vPuB.entry=new Array();for(_vSwE=0;_vSwE<_vPuB.entry_number;_vSwE++){_vPuB.entry[_vSwE]=new Object();temp=new Object();entry=json.feed.entry[_vSwE];temp.id=entry.id.$t;key=_s7IgU[41];index=temp.id.indexOf(key);temp.id=temp.id.substring(index+key.length);temp.published=_s7IgU[42];if(_s7IgU[43] in entry){temp.published=entry.published.$t;}temp.cate=new Array();if(_s7IgU[44] in entry){for(j=0;j<entry.category.length;j++){temp.cate[j]=entry.category[j].term;}}temp.title=_s7IgU[45];if(_s7IgU[46] in entry){temp.title=entry.title.$t;}temp.content=_s7IgU[47];if(_s7IgU[48] in entry){temp.content=entry.content.$t;}temp.summary=_s7IgU[49];if(_s7IgU[50] in entry){temp.summary=entry.summary.$t;}if(temp.summary==_s7IgU[51]){temp.summary=temp.content.replace(_vUkF,_s7IgU[52]);}if(temp.content==_s7IgU[53]){temp.content=temp.summary;}temp.link=_s7IgU[54];temp.reply_label=_s7IgU[55];if(_s7IgU[56] in entry){for(j=0;j<entry.link.length;j++){if(entry.link[j].rel==_s7IgU[57]){temp.link=entry.link[j].href;}if(entry.link[j].rel==_s7IgU[58]){temp.reply_label=entry.link[j].title;}}}temp.author=new Object();temp.author.name=_s7IgU[59];temp.author.uri=_s7IgU[60];temp.author.avatar=_s7IgU[61];a0=entry.author[0];if(_s7IgU[62] in a0){temp.author.name=a0.name.$t;}if(_s7IgU[63] in a0){temp.author.uri=a0.uri.$t;}if(_s7IgU[64] in a0){if(a0.gd$image.src!=_s7IgU[65]){temp.author.avatar=a0.gd$image.src;}}temp.thumbnail=_s7IgU[66];if(_s7IgU[67] in entry){temp.thumbnail=entry.media$thumbnail.url;}temp.reply_number=0;if(_s7IgU[68] in entry){temp.reply_number=Number(entry.thr$total.$t);}temp.reply_label=temp.reply_label.replace(temp.reply_number+_s7IgU[69],_s7IgU[70]);temp.reply_to=_s7IgU[71];temp.reply_json=_s7IgU[72];temp.reply_title=_s7IgU[73];if(_s7IgU[74] in entry){temp.reply_to=entry[_s7IgU[75]].href;temp.reply_json=entry[_s7IgU[76]].source;temp.reply_json=temp.reply_json.replace(_s7IgU[77],_s7IgU[78]);temp.reply_json=temp.reply_json+_s7IgU[79];}temp.pid=_s7IgU[80];if(_s7IgU[81] in entry){for(j=0;j<entry.gd$extendedProperty.length;j++){if(entry.gd$extendedProperty[j].name==_s7IgU[82]){temp.pid=entry.gd$extendedProperty[j].value;}}}temp.pid=temp.pid.replace(_s7IgU[83],_s7IgU[84]);_vPuB.entry[_vSwE]=temp;}return _vPuB;}if(typeof(jquery_included)==_s7IgU[85]){jquery_included=false;}function _fCyA(){if(typeof(jQuery)==_s7IgU[86]){if(!jquery_included){jquery_included=true;var _vMbM=document.createElement(_s7IgU[87]);_vMbM.setAttribute(_s7IgU[88],_s7IgU[89]);_vMbM.setAttribute(_s7IgU[90],_s7IgU[91]);document.getElementsByTagName(_s7IgU[92])[0].appendChild(_vMbM);}setTimeout(function(){_fCyA();},50);}else{if(!($(_s7IgU[93]).length)){_vMbM=document.createElement(_s7IgU[94]);_vMbM.setAttribute(_s7IgU[95],_s7IgU[96]);_vMbM.setAttribute(_s7IgU[97],_s7IgU[98]);document.getElementsByTagName(_s7IgU[99])[0].appendChild(_vMbM);}}}_fCyA();function _fRaG(str){document.write(str);}function _fYbP(json){var _vUqE=_s7IgU[100];var _vWbL=_fHzF(json);var _vApD=_s7IgU[101];if(_vWbL.total_entry){_vApD+=(_s7IgU[102]+bcd140526_design_style+_s7IgU[103]+((bcd140526_show_thumbnail)?'thumb':_s7IgU[104])+_s7IgU[105]);for(var _vSwE=0;_vSwE<_vWbL.total_entry&&_vSwE<bcd140526_post_count;_vSwE++){p=_vWbL.entry[_vSwE];_vApD+=(_s7IgU[106]+_vSwE+_s7IgU[107]);if(!p.thumbnail){p.thumbnail=_fCdP(p.content);}if(bcd140526_show_thumbnail&&p.thumbnail){if(bcd140526_design_style===_s7IgU[108]){var _vOmB=p.thumbnail;if(_vOmB.indexOf(_s7IgU[109])!=-1){_vOmB=_vOmB.replace(_s7IgU[110],_s7IgU[111]);}else if(_vOmB.indexOf(_s7IgU[112])!=-1){if(_vOmB.indexOf(_s7IgU[113])!=-1){_vOmB=_vOmB.replace(_s7IgU[114],_s7IgU[115]);}}p.thumbnail=_vOmB;}else{var _vOmB=p.thumbnail;if(_vOmB.indexOf(_s7IgU[116])!=-1){_vOmB=_vOmB.replace(_s7IgU[117],_s7IgU[118]+bcd140526_thumbnail_size+_s7IgU[119]);}else if(_vOmB.indexOf(_s7IgU[120])!=-1){if(_vOmB.indexOf(_s7IgU[121])!=-1){_vOmB=_vOmB.replace(_s7IgU[122],_s7IgU[123]);}}p.thumbnail=_vOmB;}_vApD+=(_s7IgU[124]+bcd140526_thumbnail_size+_s7IgU[125]+bcd140526_thumbnail_size+_s7IgU[126]+p.link+_s7IgU[127]+p.thumbnail+_s7IgU[128]);}_vApD+=(_s7IgU[129]);if(bcd140526_show_label&&(typeof(p.cate[0])!=_s7IgU[130])){_vApD+=(_s7IgU[131]+HOST+_s7IgU[132]+p.cate[0]+_s7IgU[133]+p.cate[0]+_s7IgU[134]);}_vApD+=(_s7IgU[135]+p.link+_s7IgU[136]+p.title+_s7IgU[137]);if(bcd140526_show_author_name||bcd140526_show_comment_numbers||bcd140526_show_date){_vApD+=(_s7IgU[138]);if(bcd140526_show_author_name){_vApD+=(_s7IgU[139]+p.author.name+_s7IgU[140]);}if(bcd140526_show_comment_numbers){_vApD+=(_s7IgU[141]+p.reply_number+_s7IgU[142]);}if(bcd140526_show_comment_numbers){_vApD+=(_s7IgU[143]+_fAuD(p.published,bcd140526_date_format)+_s7IgU[144]);}_vApD+=(_vUqE+_s7IgU[145]+_vUqE);}if(bcd140526_show_snippet){if(p.summary.length>bcd140526_snippet_length){p.summary=p.summary.substring(0,bcd140526_snippet_length)+_s7IgU[146];}if(bcd140526_show_readmore){p.summary+=_s7IgU[147]+p.link+_s7IgU[148]+lang_readmore+_s7IgU[149];}_vApD+=(_s7IgU[150]+p.summary+_s7IgU[151]);}_vApD+=(_vUqE+_s7IgU[152]+_vUqE);_vApD+=(_s7IgU[153]);}_vApD+=(_s7IgU[154]);if(!bcd140526_hide_copyright){_vApD+=(_vUqE);_vApD+=(_s7IgU[155]);}_vApD+=(_s7IgU[156]+_vUqE);}else{_vApD+=(_s7IgU[157]);}_fRaG(_vApD);}function _fHfQ(json){if(bcd140526_sort_by==_s7IgU[158]){var _vRiO=_fHzF(json);rand=Math.floor((Math.random()*_vRiO.total_entry)+1);if(rand+bcd140526_post_count>_vRiO.total_entry){rand=_vRiO.total_entry-bcd140526_post_count+1;}if(rand<1){rand=1;}var _vXsM=HOST+_s7IgU[159];if(bcd140526_index_label){_vXsM+=_s7IgU[160]+encodeURIComponent(bcd140526_index_label);}_vXsM+=_s7IgU[161]+bcd140526_post_count+_s7IgU[162]+rand+_s7IgU[163];_fIoT(_vXsM);}else{_fYbP(json);}}var _vXsM=HOST+_s7IgU[164];if(bcd140526_index_label){_vXsM+=_s7IgU[165]+encodeURIComponent(bcd140526_index_label);}_vXsM+=_s7IgU[166];if(bcd140526_sort_by==_s7IgU[167]){_vXsM+=_s7IgU[168];}else{_vXsM+=_s7IgU[169]+bcd140526_post_count;}_vXsM+=_s7IgU[170];_fIoT(_vXsM);
