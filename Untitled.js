var storyContent = ﻿{"inkVersion":19,"root":[["^📊💰 This game was inspired by Vox's College Scholarship Tycoon 📊💰","\n",{"->":"intro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"intro":[["^You just started a new job as an admissions officer at a small liberal arts college in Boston 🏫 Here are some things to remember on your first day.","\n","^🔴 You thought your job was going to be about bringing diverse students, from multiple economic backgrounds to the campus.","\n","^🔴 But you've been getting a lot of pressure to improve your school's ranking by accepting students with higher SAT scores.","\n","^🔴 Applicants with high-SAT scores tend to come from high-income families but that doesn't neccesarily mean they will perform better in college.","\n","^🔴 These high-performing students also get offers from multiple universities so you must offer them a 'scholarship' or 'merit based aid' to attract them to your campus, depleting your ability to give aid to those who actually need it.","\n","^Can you improve your school’s rankings without discriminating against low-income students?","\n",["ev",{"^->":"intro.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Of course I can!\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"intro.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"astonished"},{"#f":5}]}],{"#f":1}],"astonished":[["^Let's be real. You can either choose to accept students with good test scores who are more likely to have higher incomes, ORRR you can choose to accept lower-scoring students who tend to have lower incomes.","\n",["ev",{"^->":"astonished.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^I want to quit my job. This is not how it should work!! ",{"->":"$r","var":true},null]}],["ev",{"^->":"astonished.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^I am willing to try. Maybe I can strike a balance.  ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"astonished.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"ending"},{"#f":5}],"c-1":["ev",{"^->":"astonished.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"nod"},{"#f":5}]}],{"#f":1}],"nod":[["^Pick only one of these candidates.","\n",["ev",{"^->":"nod.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Michael (SAT: 1420, Income: $160K, Need: $0)",{"->":"$r","var":true},null]}],["ev",{"^->":"nod.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Andrew (SAT: 1105, Income: $22K, Need: $34K) ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"nod.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"michael"},{"#f":5}],"c-1":["ev",{"^->":"nod.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"andrew"},{"#f":5}]}],{"#f":1}],"michael":["^The Admissions Office ended up giving Michael a big scholarship to make sure he picks your university. Many deserving candidates with slightly lower SAT scores were rejected. You suck!","\n",{"->":"ending"},{"#f":1}],"andrew":["^You did your best but ultimately you got fired for not being able to improve your university's ranking :(","\n",{"->":"ending"},{"#f":1}],"ending":["^Now that you're frustrated 🥲 Go read about how effed up the college admissions process is here.","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};