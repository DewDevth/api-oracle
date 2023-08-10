SELECT em.EMP_ID, em.TITLE_NAME, em.EMP_FNAME, em.EMP_LNAME, em.E_MAIL, un.UNIT_DESC, po.POS_DESC, em.ORG_ID, NULL PX
FROM kpdba.employee em
LEFT JOIN kpdba.UNIT un ON un.UNIT_ID = em.UNIT_ID
LEFT JOIN kpdba.position po ON po.pos_id = em.pos_id
WHERE em.RESIGN_DATE IS NULL
AND ROWNUM <=  :limit