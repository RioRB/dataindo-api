PGDMP     .                	    z            dataindo    15.0    15.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    16407    dataindo    DATABASE        CREATE DATABASE dataindo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE dataindo;
                me    false            ?            1259    16434    category    TABLE     l   CREATE TABLE public.category (
    id_category integer NOT NULL,
    name_category character varying(50)
);
    DROP TABLE public.category;
       public         heap    me    false            ?            1259    16464    contents    TABLE        CREATE TABLE public.contents (
    id_contents integer NOT NULL,
    author character varying(50),
    title character varying(150),
    summary character varying(500),
    created_at timestamp without time zone,
    likes integer,
    image character varying,
    subcategory integer
);
    DROP TABLE public.contents;
       public         heap    me    false            ?            1259    16439    sub_category    TABLE     ?   CREATE TABLE public.sub_category (
    id_subcategory integer NOT NULL,
    name_subcategory character varying(100),
    category integer
);
     DROP TABLE public.sub_category;
       public         heap    me    false                      0    16434    category 
   TABLE DATA           >   COPY public.category (id_category, name_category) FROM stdin;
    public          me    false    214   m                 0    16464    contents 
   TABLE DATA           n   COPY public.contents (id_contents, author, title, summary, created_at, likes, image, subcategory) FROM stdin;
    public          me    false    216   ?                 0    16439    sub_category 
   TABLE DATA           R   COPY public.sub_category (id_subcategory, name_subcategory, category) FROM stdin;
    public          me    false    215   z       m           2606    16438    category category_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id_category);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            me    false    214            q           2606    16470    contents contents_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.contents
    ADD CONSTRAINT contents_pkey PRIMARY KEY (id_contents);
 @   ALTER TABLE ONLY public.contents DROP CONSTRAINT contents_pkey;
       public            me    false    216            o           2606    16443    sub_category sub_category_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_pkey PRIMARY KEY (id_subcategory);
 H   ALTER TABLE ONLY public.sub_category DROP CONSTRAINT sub_category_pkey;
       public            me    false    215            s           2606    16471    contents contents_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.contents
    ADD CONSTRAINT contents_fk FOREIGN KEY (subcategory) REFERENCES public.sub_category(id_subcategory);
 >   ALTER TABLE ONLY public.contents DROP CONSTRAINT contents_fk;
       public          me    false    215    3183    216            r           2606    16444    sub_category sub_category_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_fk FOREIGN KEY (category) REFERENCES public.category(id_category);
 F   ALTER TABLE ONLY public.sub_category DROP CONSTRAINT sub_category_fk;
       public          me    false    214    3181    215               [   x?3??M,?N-QPS???K??2???K)-.)??2?t?L?,I??2?H?/?I?2????L?*JM/?I,????2?t,J??,K?????? ITY         ?  x??S?n?0<?_??pI?ӗ"I?6?F???\V&+?)Q???q?>?$ѻ??3?2;?=;?K???0???????N{<?Fۆ???9ݲ????[???výX??%:??6?Iz??!??A??}??b??i§?b????-?ӲQH?????+!?m|l?[vѓ?g?#+u?&&??~P??`?GKJ?b??S?`#\i4s?8????ޝ?..?S??T???؉??e?o=??v?m?0??n???F;NlZq??Y?	?2T<???-B!?ul??*?j?,??C*???ɲ????*+???6+gUv???TIx??Z?k7CG??n???K???0???A?Gq??????Q?7};?ub??? XG?$>?M?LΠHҤu?}? ?????:<w?k?La?N?N?e???&?\?%ҟ2?'??*?^,??b??x??nP?h?R??%;?+??DL9E:UB??j0??V׮f1??&?gکdǤ??$x?I??莭?y?#???5;r??@"4?d?.??Z??aቀ?E ??@N?:?^;??)h?'2i??rAb??up??6???q?vz$̯??Կ@?D?!Y?˭??i?4?$????yN??n??y?,????W@??D%???????__=-???#*??????~??*fO?l6?ݜ??         n  x?UQ?n?0<S_????8ɱ?d[??-???^T??
?E???p???? ???Ґ?n?;b?E?f&?m?? l?]?(???xd?'?>eF(??r??Rx?ɏɞ]???t??0KXG?zm?=e??Ky{??o?)<1u?I??(?c??pU3?x?b?҆?X?X????|t?yl	??X??X??m?Cr?d?)R;@i?\6I???
??xR??;tM?3c???U??!?|hPh1??!???B-?82?????T??ܜ[禘?/z?c3DМk?a"Y??T????.????????"?\TYj?}'?8?W??]?*SN?7??;'???D'?Z?>???L??6Y?+0k,?????'?̚ןƘO?7?%     