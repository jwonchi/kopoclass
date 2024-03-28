
## Headers 헤더

* #으로 시작하는 텍스트.
* #은 하나부터 여섯개까지 가능.
* #이 늘어날때마다 제목의 스케일 낮아집니다.
* H1은 ===로도 만들 수 있습니다.
* H2는 ---로도 만들 수 있습니다.


# header
## header
### header
#### header
##### header
###### header

header 1 
===

header 2
---

## Horizontal Rules 수평선

* \- 또는 * 또는 _ 을 3개 이상 작성.
* 단, -을 사용할 경우 header로 인식할 수 있으니 이 전 라인은 비워두어야 합니다.

---
***
___

## Line Breaks 줄바꿈
* "\<br\>" 를 활용해서 줄바꿈을 할 수 있습니다.
* 엔터로 칸을 띄면 다음 행으로 넘어가게 됩니다. <br>은 하나의 문장에서 줄바꿈

Oh my my my oh my my my

You got me high so fast <br>
네 전부를 함께하고 싶어

Oh my my my oh my my my

You got me fly so fast <br> 이제 조금은 나 알겠어

## Emphasis 강조
* 기울여 쓰기(italic) : * 또는 _로 감싼 텍스트.
* 두껍게 쓰기(bold) : ** 또는 __로 감싼 텍스트.
* 취소선 : ~~로 감싼 텍스트.
* 이탤릭체와 두껍게를 같이 사용할 수 있습니다.

 _This will also be italic_

**This will also be bold**
  
~~This is canceled~~

_You **can** ~~combine~~ them_

## Blockquotes 인용

\>으로 시작하는 텍스트.
\>는 3개까지 가능합니다.

As Grace Hopper said:
> I’ve always been more interested in the future than in the past.    
> This is a first blockquote.
> > This is a second blockquote.
> > > This is a third blockquote.

참고로 인용구 안에는 제목이나 리스트, 텍스트박스 등 도 넣을 수 있습니다.

> # this is h1!
> * list
> `textbox`


## Lists 목록

Unordered lists 순서가 없는 목록

\*, +, - 를 이용해서 순서가 없는 목록을 만들 수 있습니다.
들여쓰기를 하면 모양이 바뀝니다.

* 머리
  * 코
    * 입
      

+ 머리
  + 코
    + 입
      * 입

- 머리
- 코
- 입


## Ordered lists 순서가 있는 목록

숫자를 기입하면 순서가 있는 목록이 됩니다.

들여쓰기를 하면 모양이 바뀝니다.

숫자를 무엇을 쓰느냐는 그다지 큰 의미가 없고 순서대로 알아서 숫자를 매깁니다.

1. 머리
2. 다리
3. 뚝배기
5. 팔 <!-- 5번을 썻는데도 4번으로 표시된다. -->

## 리스트 안 리스트를 사용하려면 tab과 함꼐 숫자 1번 서부터 나열해야 적용이 됩니다.

1. 리스트 1번 
    1. 리스트 1-1번
2. 리스트 2번 
3. 리스트 3번 
    1. 리스트 3-1번 <!-- 리스트 안 리스트를 사용하려면 tab과 함꼐 숫자 1번 서부터 -->
    2. 리스트 3-2번

## 혼합 리스트

1. 머리
   * 머리카락
   * 뚝배기
      + 털
2. 다리
   - 다리털
   - 발가락
      1. 허벅지


## Backslash Escapes

특수문자를 표현할 때, 표시될 문자 앞에 \를 넣고 특수문자를 쓰면 됩니다.

* 특수문자 출력안됨
- 특수문자 출력안됨

\* 특수문자 출력

\- 특수문자 출력

\*literal asterisks\*

\#hash mark\#

\[squre brackets\]


## 이미지
링크와 비슷하지만 앞에 !가 붙습니다.
인라인 이미지 \!\[alt text\]\(/test.png\)

링크 이미지 \!\[alt text\]\(image_URL\)

이미지의 사이즈를 변경하기 위해서는 \<img width="OOOpx" height="OOOpx"\>\</img\>와 같이 표현합니다.


![깃헙](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/220px-Font_Awesome_5_brands_github.svg.png)

이미지 파일에 마우스를 올렸을 때 커서 옆에 나오는 텍스트 설정

![깃헙](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/220px-Font_Awesome_5_brands_github.svg.png  "깃헙 이미지")


링크와 이미지를 합친 문법 (이미지를 링크로 사용)

[![유니티](https://t1.daumcdn.net/cfile/tistory/2444873B57E257821F)(https://unity3d.com/kr)






출처: https://inpa.tistory.com/entry/MarkDown-📚-마크다운-문법-💯-정리




