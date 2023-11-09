const express = require('express');
const da = require('../data-access');
const { json } = require('stream/consumers');
const router = express.Router();



router.post('/Getseo', async (req, res) => {
  try {
    const cmd = "usp_getpagedata";
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    //const c = await da.close();

    res.json({
      success: 200,
      data: JSON.parse(Object.values(result.recordset[0])[0]),
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post("/Getblogdata", async (req, res) => {
  try {
    const cmd = "usp_getblogdata";
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    //const c = await da.close();

    res.json({
      success: 200,
      data: JSON.parse(Object.values(result.recordset[0])[0]),
    });
  } catch (error) {
    const c = await da.close();
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/Insert_UploadFolder', async (req, res) => {
  try {
    const cmd = 'Insert_UploadFolder';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getfolder', async (req, res) => {
  try {
    const cmd = 'pr_Getfolder';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Uploadfile', async (req, res) => {
  try {
    const cmd = 'Pr_Uploadfile';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/getMenuRole', async (req, res) => {
  try {
    const cmd = 'Pr_getMenuRole';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordsets
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertMenuRole', async (req, res) => {
  try {
    const cmd = 'Pr_InsertMenuRole';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/UserLogin', async (req, res) => {
  try {
    const cmd = 'Pr_UserLogin';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getpages', async (req, res) => {
  try {
    const cmd = 'Pr_Getpages';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/IUDNews', async (req, res) => {
  try {
    const cmd = 'Pr_IUDNews';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetContentmaster', async (req, res) => {
  try {
    const cmd = 'Pr_GetContentmaster';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletecontent', async (req, res) => {
  try {
    const cmd = 'Pr_deletecontent';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/ApproveContent', async (req, res) => {
  try {
    const cmd = 'Pr_ApproveContent';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/CreateCustomPage', async (req, res) => {
  try {
    const cmd = 'Pr_CreateCustomPage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getpagesadd', async (req, res) => {
  try {
    const cmd = 'Pr_Getpages_add';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Updatepage', async (req, res) => {
  try {
    const cmd = 'Pr_Updatepage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetPagedetails', async (req, res) => {
  try {
    const cmd = 'Pr_GetPagedetails';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getbreadcrumb', async (req, res) => {
  try {
    const cmd = 'Pr_Getbreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertUpdatebreadcrumb', async (req, res) => {
  try {
    const cmd = 'Pr_InsertUpdatebreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletebreadcrumb', async (req, res) => {
  try {
    const cmd = 'Pr_Deletebreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/MenuRolebyProject', async (req, res) => {
  try {
    const cmd = 'Pr_MenuRolebyProject';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetUtmSource', async (req, res) => {
  try {
    const cmd = 'Proc_Get_UtmSource';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetEnquiry', async (req, res) => {
  try {
    const cmd = 'Proc_GetEnquiry_json';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    var data = result.recordset[0];
    var dataArray = JSON.parse(Object.values(data)[0]);
    const c = await da.close();
    res.json({
      success: 200,
      data: dataArray
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertUpdateCenterInfo', async (req, res) => {
  try {
    const cmd = 'Pr_InsertUpdateCenterInfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    console.log(result);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetCenterInfo', async (req, res) => {
  try {
    const cmd = 'Pr_GetCenterInfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);   
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletecenterinfo', async (req, res) => {
  try {
    const cmd = 'Pr_deletecenterinfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
module.exports = router;
