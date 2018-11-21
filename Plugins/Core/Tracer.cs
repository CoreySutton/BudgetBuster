using System;
using System.Collections.Generic;
using Microsoft.Xrm.Sdk;

namespace CoreySutton.BudgetBuster.Plugins
{
    internal class Tracer
    {
        private readonly ITracingService _tracingService;
        private readonly IPluginExecutionContext _context;

        public bool EnableTimestamps { get; set; }

        public Tracer(ITracingService tracingService, IPluginExecutionContext context)
        {
            _tracingService = tracingService;
            _context = context;
            EnableTimestamps = false;
        }

        internal void TraceHeader()
        {
            Trace($"Plugin execution started for record with id: {_context.PrimaryEntityId}");
            Trace($"Plugin execution started at: {DateTime.UtcNow}");
            Trace($"Correlation Id: {_context.CorrelationId}");
            Trace($"Initiating User Id: {_context.InitiatingUserId}");
            Trace($"User Id: {_context.UserId}");
            Trace($"Depth: {_context.Depth}");
            Trace($"Parent Context: {_context.ParentContext}");
            Trace("Input Parameters: ");
            foreach (KeyValuePair<string, object> inputParameter in _context.InputParameters)
            {
                Trace($"Key: {inputParameter.Key} Value: {inputParameter.Value}");
            }
        }

        internal void TraceEntities(Entity target = null, Entity preImage = null, Entity postImage = null)
        {
            if (target?.Attributes != null)
            {
                TraceEntity(target, "TARGET");
            }

            if (preImage?.Attributes != null)
            {
                TraceEntity(preImage, "PRE IMAGE");
            }

            if (postImage?.Attributes != null)
            {
                TraceEntity(postImage, "POST IMAGE");
            }
        }

        internal void TraceEntity(Entity entity, string entityName)
        {
            if (entity?.Attributes == null) return;

            Trace("*********************************************************");
            Trace($"***{entityName}***");
            PrintAttributes(entity.Attributes);
            Trace("*********************************************************");
        }

        private void PrintAttributes(AttributeCollection attributes)
        {
            int nullCount = 0;
            foreach (KeyValuePair<string, object> kvp in attributes)
            {
                if (kvp.Key == null)
                {
                    nullCount++;
                    continue;
                }

                if (kvp.Value == null)
                {
                    Trace($"{kvp.Key}:    null");
                    continue;
                }

                switch (kvp.Value.ToString())
                {
                    case "Microsoft.Xrm.Sdk.EntityReference":
                        var er = kvp.Value as EntityReference;
                        Trace($"{kvp.Key}:    {BuildErString(er)}");
                        break;
                    case "Microsoft.Xrm.Sdk.OptionSetValue":
                        if (kvp.Value is OptionSetValue osv)
                            Trace($"{kvp.Key}:    {osv.Value}");
                        else
                            Trace($"{kvp.Key}:    null");
                        break;
                    default:
                        Trace($"{kvp.Key}:    {kvp.Value}");
                        break;
                }
            }

            Trace($"Null Attribute Count:    {nullCount}");
        }

        private static string BuildErString(EntityReference er)
        {
            return er == null ? "null" : $"{(er.Name != null ? $"{er.Name}    " : null)} {er.Id.ToString()}";
        }

        internal void Ctor(string className)
        {
            Trace($"** new {className}()");
        }

        internal void FuncStart(string functionName)
        {
            Trace($"=> {functionName}");
        }

        internal void FuncEnd(string functionName, string endReason = null)
        {
            if (string.IsNullOrEmpty(endReason) == false)
            {
                Trace(endReason);
            }
            Trace($"<= {functionName}");
        }

        internal void Trace(string message)
        {
            _tracingService.Trace(EnableTimestamps ? $"{DateTime.UtcNow:o}    {message}" : message);
        }
    }
}
