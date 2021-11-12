body1 = document.getElementById("body-1");
for (let i = 1; i < 74; i++) {
  text = `https://image.slidesharecdn.com/pharmacovigilanceprocessworkflow-katalysthls-170111211147/95/pharmacovigilance-process-work-flow-katalyst-hls-${i}-1024.jpg?cb=1484169559`;
  a = document.createElement("a");
  link = document.createTextNode(i + `         `);
  a.appendChild(link);
  a.href = text;
  a.target = "_blank";
  body1.appendChild(a);
}
