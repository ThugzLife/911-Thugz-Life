(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{108:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return O}));var r=n(12),a=n(1),i=n.n(a),c=n(3),o=n(26),s=n(38),u=n(21),l=n(222),d=n(68),b=new o.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],o=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(o||!a){e.next=7;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],o||(s?s.err?(console.log("REST error for",t,s),o=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),o=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,v(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},m=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,c,s,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.b(r,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(b,a);case 3:return c=e.sent,s=new o.a(c,b,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate&&u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a){var c,b,f,m,O,v,k,y,w,S,T,M,P,E,K,L,R;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(a.publicKey,n);case 2:if(c=e.sent[0],!t.state.tokenMint){e.next=9;break}return e.next=6,Object(d.c)(t.state.tokenMint,n);case 6:e.t0=e.sent[0],e.next=10;break;case 9:e.t0=n;case 10:return b=e.t0,f=t.id,m=[],O=[a],v=[],e.t1=o.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=21,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 21:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=x(c,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,c,n,[],1),k=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=44;break}return e.t12=m,e.next=33,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 33:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=44;break}return m.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=41,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 41:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 44:if(!t.state.whitelistMintSettings){e.next=59;break}return y=new o.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=48,Object(d.c)(y,n);case 48:if(w=e.sent[0],m.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=59;break}return S=o.d.Keypair.generate(),m.push({pubkey:y,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),O.push(S),e.next=57,t.program.provider.connection.getAccountInfo(w);case 57:e.sent&&(k.push(s.c.createApproveInstruction(s.b,w,S.publicKey,n,[],1)),v.push(s.c.createRevokeInstruction(s.b,w,n,[])));case 59:return t.state.tokenMint&&(T=o.d.Keypair.generate(),O.push(T),m.push({pubkey:b,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),k.push(s.c.createApproveInstruction(s.b,b,T.publicKey,n,[],t.state.price.toNumber())),v.push(s.c.createRevokeInstruction(s.b,b,n,[]))),e.next=62,j(a.publicKey);case 62:return M=e.sent,e.next=65,g(a.publicKey);case 65:return P=e.sent,e.next=68,h(f);case 68:return E=e.sent,K=Object(r.a)(E,2),L=K[0],R=K[1],e.t18=k,e.next=75,t.program.instruction.mintNft(R,{accounts:{candyMachine:f,candyMachineCreator:L,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:M,masterEdition:P,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:s.b,systemProgram:u.e.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:o.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:o.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 75:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=77,e.next=80,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[k,v],[O,[]]);case 80:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 83:e.prev=83,e.t20=e.catch(77),console.log(e.t20);case 86:return e.abrupt("return",[]);case 87:case"end":return e.stop()}}),e,null,[[77,83]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(9),i=n(1),c=n.n(i),o=n(3),s=n(21),u=n(95);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(o.a)(c.a.mark((function e(t,n,i,o){var l,d,b,f,x,m,g,j,h,O,v,k,y,w,S=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},x=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(m=[],x){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:x=e.sent;case 12:g=function(e){var t=i[e],r=o[e];if(0===t.length)return"continue";var c=new s.f;t.forEach((function(e){return c.add(e)})),c.recentBlockhash=x.blockhash,c.setSigners.apply(c,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&c.partialSign.apply(c,Object(a.a)(r)),m.push(c)},j=0;case 14:if(!(j<i.length)){e.next=21;break}if("continue"!==g(j)){e.next=18;break}return e.abrupt("continue",18);case 18:j++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:h=e.sent,O=[],v={breakEarly:!1,i:0},console.log("Signed txns length",h.length,"vs handed in length",i.length),k=c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:h[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){f(h[n],n),l===r.StopOnFailure&&(v.breakEarly=!0,v.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!v.breakEarly){e.next=19;break}return console.log("Died on ",v.i),e.t1=v.i,e.next=16,Promise.all(O);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:O.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),y=0;case 29:if(!(y<h.length)){e.next=37;break}return e.delegateYield(k(y),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:y++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(O);case 40:return e.t1=h.length,e.next=43,Promise.all(O);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=3e4;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(c.a.mark((function e(t){var n,r,a,i,s,u,l,p,f,m,j,O,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?b:a,s=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,h(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,g(p,i,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return j=null,e.prev=28,e.next=31,x(r,n,"single");case 31:j=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!j||!j.err){e.next=47;break}if(!j.logs){e.next=46;break}O=j.logs.length-1;case 39:if(!(O>=0)){e.next=46;break}if(!(v=j.logs[O]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+v.slice("Program log: ".length));case 43:--O,e.next=39;break;case 46:throw new Error(JSON.stringify(j.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function x(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,o,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),o=i.toString("base64"),s=[o,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,s,u,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(o.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!i){e.next=8;break}return Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return new Promise((function(t){return setTimeout(t,e)}))}},243:function(e,t,n){},244:function(e,t){},245:function(e,t){},272:function(e,t){},273:function(e,t){},297:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,u,l,d,b,p,f,x,m,g,j,h,O,v,k,y,w=n(4),S=n.n(w),T=n(53),M=n.n(T),P=(n(243),n(229)),E=n(424),K=n(435),L=n(427),R=n(26),A=n(21),B=n(429),I=n(430),N=n(431),C=n(421),_=n(422),W=n(423),D=n(432),U=n(433),F=n(434),V=n(138),z=(n(297),n(8)),G=n(1),Y=n.n(G),q=n(3),H=n(12),J=n(34),Z=n(33),Q=n(215),X=n(418),$=n(85),ee=n(220),te=n(416),ne=n(436),re=n(417),ae=n(425),ie=n(426),ce=n(68),oe=n(414),se=n(415),ue=n(15),le=Object(Z.default)(oe.a)(r||(r=Object(J.a)(["\n  display: block !important;\n  margin: 0 auto !important;\n  background-color: var(--title-text-color) !important;\n  min-width: 120px !important;\n  font-size: 1em !important;\n"]))),de=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isActive,i=e.isSoldOut,c=Object($.useGateway)(),o=c.requestGatewayToken,s=c.gatewayStatus,u=Object(w.useState)(!1),l=Object(H.a)(u,2),d=l[0],b=l[1],p=Object(w.useState)(!1),f=Object(H.a)(p,2),x=f[0],m=f[1];return Object(w.useEffect)((function(){m(!1),s===$.GatewayStatus.COLLECTING_USER_INFORMATION&&d?m(!0):s===$.GatewayStatus.ACTIVE&&d&&(console.log("Verified human, now minting..."),t(),b(!1))}),[s,d,b,t]),Object(ue.jsx)(le,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||i||r||!a||x,onClick:Object(q.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!(null===n||void 0===n?void 0:n.state.gatekeeper)||s===$.GatewayStatus.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),b(!0),e.next=5,o();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)||i?"SOLD OUT":a?x?"VERIFYING...":r?Object(ue.jsx)(se.a,{}):"MINT":(null===n||void 0===n?void 0:n.state.goLiveDate)?"SOON":"UNAVAILABLE":"CONNECTING..."})},be=n(108),pe="mainnet-beta".toString(),fe=Z.default.div(a||(a=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),xe=Z.default.div(i||(i=Object(J.a)(["\n  color: black;\n  width: auto;\n  padding: 5px 5px 5px 16px;\n  min-width: 48px;\n  min-height: auto;\n  border-radius: 22px;\n  background-color: var(--main-text-color);\n  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  border: 0;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: flex-start;\n  gap: 10px;\n"]))),me=Z.default.ul(c||(c=Object(J.a)(["\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n"]))),ge=Object(Z.default)(V.b)(o||(o=Object(J.a)(["\n  border-radius: 18px !important;\n  padding: 6px 16px;\n  background-color: #4E44CE;\n  margin: 0 auto;\n"]))),je=Object(Z.default)(te.a)(s||(s=Object(J.a)(["\n  min-width: 400px;\n  padding: 5px 20px 20px 20px;\n  flex: 1 1 auto;\n  background-color: var(--card-background-color) !important;\n\n"]))),he=Object(Z.default)(je)(u||(u=Object(J.a)(["\n  text-align: left;\n  padding-top: 0px;\n"]))),Oe=Object(Z.default)(te.a)(l||(l=Object(J.a)(["\n  display: inline-block;\n  background-color: var(--card-background-lighter-color) !important;\n  margin: 5px;\n  padding: 24px;\n"]))),ve=Z.default.div(d||(d=Object(J.a)(["\n  button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {\n    color: #464646;\n  }\n\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {\n    -webkit-animation: pulse 1s;\n    animation: pulse 1s;\n    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\n  }\n\n  @-webkit-keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n"]))),ke=Z.default.div(b||(b=Object(J.a)(["\n  flex: 0 0 auto;\n\n  img {\n    height: 60px;\n  }\n"]))),ye=Z.default.ul(p||(p=Object(J.a)(["\n  list-style: none;\n  display: inline-flex;\n  flex: 1 0 auto;\n\n  li {\n    margin: 0 12px;\n\n    a {\n      color: var(--main-text-color);\n      list-style-image: none;\n      list-style-position: outside;\n      list-style-type: none;\n      outline: none;\n      text-decoration: none;\n      text-size-adjust: 100%;\n      touch-action: manipulation;\n      transition: color 0.3s;\n      padding-bottom: 15px;\n\n      img {\n        max-height: 26px;\n      }\n    }\n\n    a:hover, a:active {\n      color: rgb(131, 146, 161);\n      border-bottom: 4px solid var(--title-text-color);\n    }\n\n  }\n"]))),we=Z.default.a(f||(f=Object(J.a)(["\n  color: var(--title-text-color);\n  border-bottom: 1px solid var(--title-text-color);\n  font-weight: bold;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n  text-size-adjust: 100%;\n\n  :hover {\n    border-bottom: 2px solid var(--title-text-color);\n  }\n"]))),Se=Z.default.div(x||(x=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-right: 4%;\n  margin-left: 4%;\n  text-align: center;\n  justify-content: center;\n"]))),Te=Z.default.div(m||(m=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Me=Z.default.div(g||(g=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 20px;\n"]))),Pe=Object(Z.default)(ne.a)(j||(j=Object(J.a)(["\n  position: absolute;\n  margin: 5px;\n  font-weight: bold;\n  font-size: 1em !important;\n"]))),Ee=Z.default.img(h||(h=Object(J.a)(["\n  height: 400px;\n  width: auto;\n  border-radius: 7px;\n  box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.5);\n"]))),Ke=Object(Z.default)(re.a)(O||(O=Object(J.a)(["\n  margin: 20px 0;\n  height: 10px !important;\n  border-radius: 30px;\n  border: 2px solid white;\n  box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.5);\n  background-color:var(--main-text-color) !important;\n  \n  > div.MuiLinearProgress-barColorPrimary{\n    background-color:var(--title-text-color) !important;\n  }\n\n  > div.MuiLinearProgress-bar1Determinate {\n    border-radius: 30px !important;\n    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.5));\n  }\n"]))),Le=Z.default.h1(v||(v=Object(J.a)(["\n  margin: 50px auto;\n  text-transform: uppercase;\n  animation: glow 2s ease-in-out infinite alternate;\n  color: var(--main-text-color);\n  @keyframes glow {\n    from {\n      text-shadow: 0 0 20px var(--main-text-color);\n    }\n    to {\n      text-shadow: 0 0 30px var(--title-text-color), 0 0 10px var(--title-text-color);\n    }\n  }\n"]))),Re=Z.default.h2(k||(k=Object(J.a)(["\n  color: var(--title-text-color);\n"]))),Ae=Z.default.div(y||(y=Object(J.a)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    max-height: 35px;\n    margin-right: 10px;\n  }\n"]))),Be=function(e){var t,n,r=Object(w.useState)(),a=Object(H.a)(r,2),i=a[0],c=a[1],o=Object(w.useState)(!1),s=Object(H.a)(o,2),u=s[0],l=s[1],d=Object(w.useState)(!1),b=Object(H.a)(d,2),p=b[0],f=b[1],x=Object(w.useState)(""),m=Object(H.a)(x,2),g=m[0],j=m[1],h=Object(w.useState)(0),O=Object(H.a)(h,2),v=O[0],k=O[1],y=Object(w.useState)(0),S=Object(H.a)(y,2),T=S[0],M=S[1],P=Object(w.useState)(0),E=Object(H.a)(P,2),K=E[0],L=E[1],B=Object(w.useState)(!1),I=Object(H.a)(B,2),N=I[0],C=I[1],_=Object(w.useState)(!1),W=Object(H.a)(_,2),D=W[0],U=W[1],F=Object(w.useState)(0),V=Object(H.a)(F,2),G=V[0],J=V[1],Z=Object(w.useState)("SOL"),te=Object(H.a)(Z,2),ne=te[0],re=te[1],oe=Object(w.useState)(0),se=Object(H.a)(oe,2),le=se[0],Be=se[1],Ie=Object(w.useState)(!1),Ne=Object(H.a)(Ie,2),Ce=Ne[0],_e=Ne[1],We=Object(w.useState)(0),De=Object(H.a)(We,2),Ue=De[0],Fe=De[1],Ve=Object(w.useState)({open:!1,message:"",severity:void 0}),ze=Object(H.a)(Ve,2),Ge=ze[0],Ye=ze[1],qe=Object(X.a)(),He=Object(w.useState)(),Je=Object(H.a)(He,2),Ze=Je[0],Qe=Je[1],Xe=e.rpcHost;function $e(e){var t=K-1;if(L(t),C(0===t),Ue&&Ue>0){var n=Ue-1;Fe(n),f(n>0)}M(T+1);!D&&i&&i>0&&c(i-(Ce?le:G)-.012),j("devnet"===pe||"testnet"===pe?"https://explorer.solana.com/address/"+e+"?cluster="+pe:"https://explorer.solana.com/address/"+e),Object(Q.a)({particleCount:400,spread:70,origin:{y:.6}})}var et=function(){var t=Object(q.a)(Y.a.mark((function t(){var n,r,a,i,c,o;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(qe&&(null===Ze||void 0===Ze?void 0:Ze.program)&&qe.publicKey)){t.next=14;break}return a=R.d.Keypair.generate(),t.next=7,Object(be.d)(Ze,qe.publicKey,a);case 7:if(i=t.sent[0],c={err:!0},!i){t.next=13;break}return t.next=12,Object(be.b)(i,e.txTimeout,e.connection,"singleGossip",!0);case 12:c=t.sent;case 13:(null===(r=c)||void 0===r?void 0:r.err)?Ye({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(Ye({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),$e(a.publicKey));case 14:t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),o=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?o="SOLD OUT!":312===t.t0.code&&(o="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?o="SOLD OUT!":t.t0.message.indexOf("0x135")&&(o="Insufficient funds to mint. Please fund your wallet.")):o="Transaction Timeout! Please try again.",Ye({open:!0,message:o,severity:"error"});case 21:return t.prev=21,l(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,16,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(w.useEffect)((function(){Object(q.a)(Y.a.mark((function t(){var n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!qe){t.next=5;break}return t.next=3,e.connection.getBalance(qe.publicKey);case 3:n=t.sent,c(n/A.b);case 5:case"end":return t.stop()}}),t)})))()}),[qe,e.connection]),Object(w.useEffect)((function(){Object(q.a)(Y.a.mark((function t(){var n,r,a,i,c,o,s;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(qe){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(be.c)(qe,e.candyMachineId,e.connection);case 4:if(n=t.sent,Qe(n),k(n.state.itemsAvailable),L(n.state.itemsRemaining),M(n.state.itemsRedeemed),r=1,r=+("1"+new Array(9).join("0").slice()+"0"),n.state.tokenMint?(U(!0),re("TOKEN"),J(n.state.price.toNumber()/r),Be(n.state.price.toNumber()/r)):(J(n.state.price.toNumber()/A.b),Be(n.state.price.toNumber()/A.b)),!n.state.whitelistMintSettings){t.next=35;break}return _e(!0),null!==n.state.whitelistMintSettings.discountPrice&&n.state.whitelistMintSettings.discountPrice!==n.state.price&&(n.state.tokenMint?Be((null===(a=n.state.whitelistMintSettings.discountPrice)||void 0===a?void 0:a.toNumber())/r):Be((null===(i=n.state.whitelistMintSettings.discountPrice)||void 0===i?void 0:i.toNumber())/A.b)),c=0,t.prev=16,t.t0=e.connection,t.next=20,Object(ce.c)(n.state.whitelistMintSettings.mint,qe.publicKey);case 20:return t.t1=t.sent[0],t.next=23,t.t0.getTokenAccountBalance.call(t.t0,t.t1);case 23:s=t.sent,c=(null===s||void 0===s||null===(o=s.value)||void 0===o?void 0:o.uiAmount)||0,t.next=31;break;case 27:t.prev=27,t.t2=t.catch(16),console.error(t.t2),c=0;case 31:Fe(c),f(c>0),t.next=36;break;case 35:_e(!1);case 36:case"end":return t.stop()}}),t,null,[[16,27]])})))()}),[qe,e.candyMachineId,e.connection]),Object(ue.jsxs)("main",{children:[Object(ue.jsxs)(Se,{children:[Object(ue.jsxs)(fe,{children:[Object(ue.jsx)(ke,{children:Object(ue.jsx)("a",{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer",children:Object(ue.jsx)("img",{alt:"",src:"logo.png"})})}),Object(ue.jsxs)(ye,{children:[Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer",children:"Menu 1"})}),Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer",children:"Menu 2"})}),Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer",children:"Menu 3"})})]}),Object(ue.jsx)(me,{children:qe?Object(ue.jsxs)(xe,{children:[(i||0).toLocaleString()," SOL",Object(ue.jsx)(ge,{})]}):Object(ue.jsx)(ge,{children:"Connect Wallet"})})]}),Object(ue.jsx)(Le,{children:"MINT IS LIVE !"}),Object(ue.jsx)("br",{}),Object(ue.jsxs)(Te,{children:[Object(ue.jsx)(Me,{children:Object(ue.jsxs)(je,{elevation:3,children:[Object(ue.jsx)("h2",{children:"My NFT"}),Object(ue.jsx)("br",{}),Object(ue.jsxs)("div",{children:[Object(ue.jsx)(Pe,{label:p&&Ce&&Ue>0?le+" "+ne:G+" "+ne}),Object(ue.jsx)(Ee,{src:"cool-cats.gif",alt:"NFT To Mint"})]}),Object(ue.jsx)("br",{}),qe&&p&&Ce&&Ue>0&&Object(ue.jsxs)("h3",{children:["You have ",Ue," whitelist mint(s) remaining."]}),qe&&p&&Object(ue.jsxs)("h3",{children:["TOTAL MINTED : ",T," / ",v]}),qe&&p&&Object(ue.jsx)(Ke,{variant:"determinate",value:100-100*K/v}),Object(ue.jsx)("br",{}),Object(ue.jsx)(ve,{children:!p&&(null===Ze||void 0===Ze?void 0:Ze.state.goLiveDate)?Object(ue.jsx)(ee.a,{date:Object(ce.f)(null===Ze||void 0===Ze?void 0:Ze.state.goLiveDate),onMount:function(e){return e.completed&&f(!0)},onComplete:function(){f(!0)},renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object(ue.jsxs)("div",{children:[Object(ue.jsxs)(Oe,{elevation:1,children:[Object(ue.jsx)("h1",{children:t}),Object(ue.jsx)("br",{}),"Days"]}),Object(ue.jsxs)(Oe,{elevation:1,children:[Object(ue.jsx)("h1",{children:n}),Object(ue.jsx)("br",{}),"Hours"]}),Object(ue.jsxs)(Oe,{elevation:1,children:[Object(ue.jsx)("h1",{children:r}),Object(ue.jsx)("br",{}),"Mins"]}),Object(ue.jsxs)(Oe,{elevation:1,children:[Object(ue.jsx)("h1",{children:a}),Object(ue.jsx)("br",{}),"Secs"]})]})}}):qe?(null===Ze||void 0===Ze?void 0:Ze.state.gatekeeper)&&qe.publicKey&&qe.signTransaction?Object(ue.jsx)($.GatewayProvider,{wallet:{publicKey:qe.publicKey||new A.c(be.a),signTransaction:qe.signTransaction},gatekeeperNetwork:null===Ze||void 0===Ze||null===(t=Ze.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:Xe,options:{autoShowModal:!1},children:Object(ue.jsx)(de,{candyMachine:Ze,isMinting:u,isActive:p,isSoldOut:N,onMint:et})}):Object(ue.jsx)(de,{candyMachine:Ze,isMinting:u,isActive:p,isSoldOut:N,onMint:et}):Object(ue.jsx)(ge,{children:"Connect Wallet"})}),Object(ue.jsx)("br",{}),qe&&p&&g&&Object(ue.jsx)(we,{href:g,target:"_blank",children:"View on Solana Explorer"})]})}),Object(ue.jsxs)(Me,{children:[Object(ue.jsxs)(he,{elevation:2,children:[Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)("img",{src:"logo.png",alt:""}),Object(ue.jsx)(Re,{children:"TITLE 1"})]}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]}),Object(ue.jsxs)(he,{elevation:2,children:[Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)("img",{src:"logo.png",alt:""}),Object(ue.jsx)(Re,{children:"TITLE 2"})]}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]}),Object(ue.jsxs)(he,{elevation:2,children:[Object(ue.jsxs)(Ae,{children:[Object(ue.jsx)("img",{src:"logo.png",alt:""}),Object(ue.jsx)(Re,{children:"TITLE 3"})]}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(ue.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})]})]})]}),Object(ue.jsx)(ae.a,{open:Ge.open,autoHideDuration:6e3,onClose:function(){return Ye(Object(z.a)(Object(z.a)({},Ge),{},{open:!1}))},children:Object(ue.jsx)(ie.a,{onClose:function(){return Ye(Object(z.a)(Object(z.a)({},Ge),{},{open:!1}))},severity:Ge.severity,children:Ge.message})})]})};n(355);var Ie=new R.d.PublicKey("7QpVasGFXtLNB6iKAx7geM7ad4uhJMrUVKU7rjjSbv1g"),Ne="mainnet-beta",Ce="https://rough-black-star.solana-mainnet.quiknode.pro/4430335dc27a6ad254dbc334251ec3bf0d306cba/",_e=new R.d.Connection(Ce),We=Object(P.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),De=function(){var e=Object(w.useMemo)((function(){return Object(A.h)(Ne)}),[]),t=Object(w.useMemo)((function(){return[Object(B.a)(),Object(I.a)(),Object(N.a)(),Object(C.a)(),Object(_.a)({network:Ne}),Object(W.a)({network:Ne}),Object(D.a)(),Object(U.a)(),Object(F.a)()]}),[]);return Object(ue.jsx)(E.a,{theme:We,children:Object(ue.jsx)(K.a,{endpoint:e,children:Object(ue.jsx)(L.a,{wallets:t,autoConnect:!0,children:Object(ue.jsx)(V.a,{children:Object(ue.jsx)(Be,{candyMachineId:Ie,connection:_e,txTimeout:3e4,rpcHost:Ce})})})})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,437)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};M.a.render(Object(ue.jsx)(S.a.StrictMode,{children:Object(ue.jsx)(De,{})}),document.getElementById("root")),Ue()},68:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(1),a=n.n(r),i=n(3),c=n(26),o=n(38),s=(n(21),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[386,1,2]]]);
//# sourceMappingURL=main.5665a51d.chunk.js.map