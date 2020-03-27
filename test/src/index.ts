import a from '../../';
console.log(a);
// import * as PIXI from 'pixi.js';
// import { otinpo } from './constants/object/otinpo';
// // import drawing from './utils/PixiDrawing';
// import { FACES } from './assets/images';
// import { generateSeishi } from './constants/object/bullet';
// import WindowSizeManager from './utils/WindowSizeManager';
// 
// 
// const enakoImg = new Image()
// const rihoImg = new Image()
// 
// document.body.appendChild(enakoImg);
// document.body.appendChild(rihoImg);
// 
// const main = () => {
//   const app = new PIXI.Application({ antialias: true });
//   document.body.appendChild(app.view);
// 
//   const enakoImage = new Image();
//   enakoImage.src = FACES.ENAKO;
//   const graphics = new PIXI.Graphics();
//   const enakoChang = new PIXI.Sprite(PIXI.Texture.from(enakoImage));
//   enakoImage.onload = () => {
//     enakoChang.pivot.x = enakoChang.texture.width / 2
//     enakoChang.pivot.y = enakoChang.texture.height / 2
//   }
// 
//   enakoChang.scale.x *= 0.4;
//   enakoChang.scale.y *= 0.4;
// 
//   app.stage.addChild(graphics);
//   app.stage.addChild(otinpo);
//   app.stage.addChild(enakoChang);
//   // app.stage.addChild(drawing);
// 
//   window.addEventListener('mousemove', (e) => {
//     otinpo.position.x = e.x;
//     otinpo.position.y = e.y;
//   })
// 
//   window.addEventListener('mousedown', (e) => {
//     const seishi = generateSeishi({pow: 2, mode: 1});
//     app.stage.addChild(seishi);
//     seishi.position.x = e.x;
//     seishi.position.y = e.y - 100;
//     const movement = (tIme: number) => {
//       seishi.position.y -= 10;
//       requestAnimationFrame(movement);
//     };
//     requestAnimationFrame(movement);
//   });
// 
//   const prePoint = new PIXI.Point(100, 100);
//   const targetPoint = new PIXI.Point(0, 0);
//   const moveEnako = (time: number) => {
//     prePoint.x
//     targetPoint
//     time
//     window.requestAnimationFrame(moveEnako);
//   }
//   let i = 0;
//   app.ticker.add((params) => {
//     // 1frame
//     i += PIXI.Ticker.shared.deltaMS * params / 1000;
//     const offset = i * Math.PI * 2
//     // enakoChang.rotation = Math.cos(offset);
//     enakoChang.position.x = Math.cos(offset / 2) * 300 + WindowSizeManager.width / 2;
//     // enakoChang.position.y = WindowSizeManager.height / 3;
//     enakoChang.position.y = Math.sin(offset / 2) * 300 + 300;
//     
//   });
// 
//   window.requestAnimationFrame(moveEnako);
// 
//   app.view.style.height = '100%';
//   app.view.style.width = '100%';
//   const handleCanvasResize = () => {
//     app.view.width = WindowSizeManager.width * window.devicePixelRatio;
//     app.view.height = WindowSizeManager.height * window.devicePixelRatio;
//   }
//   WindowSizeManager.addEventListener(handleCanvasResize, true);
// 
// }
// 
// main();