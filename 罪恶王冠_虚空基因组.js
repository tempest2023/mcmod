var void_item={void_item1:[268,272,283,276,267],void_item2:[270,274,285,278,257,269,273,284,277,256],void_item3:[290,291,294,293,292,259],void_item4:[271,275,286,279,258],void_item5:[203,306,310,314,298,302],void_item6:[299,315,311,303,307,300,304,308,312,316,303,304],void_item7:[301,305,309,317,313,305],void_item8:[346],void_item9:[261],void_item10:[359],chant1:[9,10,11,12,13,14],chant2:[15,16,17,18],chant3:[17],chant4:[9,10,11,15,16,17,18],chant5:[0,1,3,4,5,6,8,17],chant6:[0,1,3,4,5,17],chant7:[0,
1,2,3,4,5,7,17],chant8:[23,24,17],chant9:[19,20,21,22,17],chant10:[15,16,17]},xingfj=!1,jg=!1,js=0;function dip_size(d,c){return Math.ceil(c*d.getResources().getDisplayMetrics().density)}
function x_btn_show(d){var c=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();c.runOnUiThread(new java.lang.Runnable({run:function(){try{var a=new android.widget.LinearLayout(c);btnWindow=new android.widget.Button(c);btnWindow.setText(d);btnWindow.setOnClickListener(new android.view.View.OnClickListener({onClick:function(a){0==xingfj?(x_btn_dismiss(),xingfj=!0,print("\u5f00\u542f\u865a\u7a7a\u80fd\u529b"),x_btn_show("\u5173\u95ed")):(x_btn_dismiss(),xingfj=!1,print("\u5173\u95ed\u865a\u7a7a\u80fd\u529b"),
x_btn_show("\u5f00\u542f"))}}));a.addView(btnWindow);btnWindow=new android.widget.PopupWindow(a,dip_size(c,95),dip_size(c,95));btnWindow.showAtLocation(c.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,15,15)}catch(f){print("\u62b1\u6b49,\u65e0\u6cd5\u663e\u793a\u6309\u94ae")}}}))}function leaveGame(){com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run:function(){x_btn_dismiss()}}))}
function x_btn_dismiss(){com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run:function(){btnWindow.dismiss()}}))}
function newLevel(){x_btn_show("\u5f00\u542f");var d=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();d.runOnUiThread(new java.lang.Runnable({run:function(){try{var c=new android.app.AlertDialog.Builder(d);c.setTitle("Js\u4ecb\u7ecd\uff1a");c.setMessage("\u6b64\u4f5c\u54c1\u7531yika\u5de5\u4f5c\u5ba4\u5236\u4f5c\uff0c\u540d\u4e3a  <\u7f6a\u6076\u738b\u51a0:\u865a\u7a7a\u57fa\u56e0\u7ec4>,\u7a7a\u624b\u70b9\u51fb\u751f\u7269\u6709\u53ef\u80fd\u83b7\u5f97\u9644\u9b54\u7269\u54c1");c.setPositiveButton("",
new android.content.DialogInterface.OnClickListener({onClick:function(a,c){}}));c.show()}catch(a){print(a)}}}))}function modTick(){xingfj&&jg&&(js++,100==js&&(js=0,jg=!1))}
function attackHook(d,c){if(xingfj&&"-4294967295"==d&&0==getCarriedItem())if(0==jg){clientMessage("\u62bd\u53d6\u865a\u7a7a\u529b\u91cf");preventDefault();var a=random_any(1,10),f="void_item"+a,b="chant"+a,g=parseInt(void_item[f].length*Math.random()),e=random_any(1,6);addItemInventory(void_item[f][g],1,0);if(3==a)Player.enchant(Player.getSelectedSlotId(),17,e);else switch(random_any(1,4)){case 1:a=parseInt(void_item[b].length*Math.random());Player.enchant(Player.getSelectedSlotId(),void_item[b][a],
e);break;case 2:a=parseInt(void_item[b].length*Math.random());Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e);a=parseInt(void_item[b].length*Math.random());Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e);break;case 3:a=parseInt(void_item[b].length*Math.random());Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e);a=parseInt(void_item[b].length*Math.random());Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e);a=parseInt(void_item[b].length*Math.random());
Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e);break;case 4:a=parseInt(void_item[b].length*Math.random()),Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e),a=parseInt(void_item[b].length*Math.random()),Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e),a=parseInt(void_item[b].length*Math.random()),Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e),a=parseInt(void_item[b].length*Math.random()),Player.enchant(Player.getSelectedSlotId(),void_item[b][a],e)}jg=
!0;js=0}else clientMessage("\u865a\u7a7a\u80fd\u529b\u51c6\u5907\u4e2d"),preventDefault()}function random_any(d,c){switch(arguments.length){case 1:return parseInt(Math.random()*d+1);case 2:return parseInt(Math.random()*(c-d+1)+d);default:return 0}};